import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { send } = vi.hoisted(() => ({ send: vi.fn() }));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: (...args: unknown[]) => send(...args) };
  },
}));

import { submitContact, type ContactState } from "./contact";

const idle: ContactState = { status: "idle" };
const good = {
  fullName: "Rami Haddad",
  email: "rami@example.com",
  business: "Sunrise Bakery",
  phone: "+963 999 123 456",
  kind: "bakery",
  locale: "en",
};
const goodValues = Object.fromEntries(Object.entries(good).filter(([k]) => k !== "locale"));

function form(values: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [k, v] of Object.entries(values)) fd.set(k, v);
  return fd;
}

beforeEach(() => {
  send.mockReset();
  send.mockResolvedValue({ data: { id: "email_1" }, error: null });
  vi.stubEnv("RESEND_API_KEY", "re_test_key");
  vi.stubEnv("CONTACT_TO_EMAIL", "owner@example.com, backup@example.com");
  vi.stubEnv("CONTACT_FROM_EMAIL", "Neowave <hello@example.com>");
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("submitContact", () => {
  it("returns field errors with the typed values and never calls Resend", async () => {
    const state = await submitContact(idle, form({ fullName: "Rami", email: "nope", business: "  ", phone: "abc", kind: "", locale: "ar" }));
    expect(state).toEqual({
      status: "error",
      attempt: 1,
      fields: { email: "email", business: "required", phone: "phone", kind: "required" },
      values: { fullName: "Rami", email: "nope", business: "  ", phone: "abc", kind: "" },
    });
    expect(send).not.toHaveBeenCalled();
  });

  it("counts attempts across failed submissions", async () => {
    const first = await submitContact(idle, form({}));
    const second = await submitContact(first, form({}));
    expect(second.status === "error" && second.attempt).toBe(2);
  });

  it("emails every recipient and reports sent", async () => {
    const state = await submitContact(idle, form(good));
    expect(state).toEqual({ status: "sent" });
    expect(send).toHaveBeenCalledTimes(1);
    const payload = send.mock.calls[0][0] as { from: string; to: string[]; replyTo: string; subject: string; text: string };
    expect(payload.from).toBe("Neowave <hello@example.com>");
    expect(payload.to).toEqual(["owner@example.com", "backup@example.com"]);
    expect(payload.replyTo).toBe("rami@example.com");
    expect(payload.subject).toBe("New website request: Sunrise Bakery");
    expect(payload.text).toContain("Name: Rami Haddad");
    expect(payload.text).toContain("Email: rami@example.com");
    expect(payload.text).toContain("WhatsApp number: +963 999 123 456");
    expect(payload.text).toContain("Language: en");
  });

  it("accepts the request with a notice when Resend is not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const state = await submitContact(idle, form(good));
    expect(state).toEqual({ status: "sent", notice: "resendNotConfigured" });
    expect(send).not.toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledOnce();
    expect(String((console.warn as ReturnType<typeof vi.fn>).mock.calls[0][0])).toContain("Sunrise Bakery");
  });

  it("treats a recipient list of only commas and spaces as not configured", async () => {
    vi.stubEnv("CONTACT_TO_EMAIL", " , ");
    const state = await submitContact(idle, form(good));
    expect(state).toEqual({ status: "sent", notice: "resendNotConfigured" });
    expect(send).not.toHaveBeenCalled();
  });

  it("returns the generic error with the values when Resend rejects the message", async () => {
    send.mockResolvedValue({ data: null, error: { name: "validation_error", message: "bad from" } });
    const state = await submitContact(idle, form(good));
    expect(state).toEqual({
      status: "error",
      attempt: 1,
      form: "generic",
      values: goodValues,
    });
    expect(console.error).toHaveBeenCalledOnce();
  });

  it("returns the generic error when Resend throws", async () => {
    send.mockRejectedValue(new Error("network down"));
    const state = await submitContact(idle, form(good));
    expect(state.status).toBe("error");
    expect(state.status === "error" && state.form).toBe("generic");
  });

  it("gives up with the generic error when Resend hangs", async () => {
    vi.useFakeTimers();
    send.mockReturnValue(new Promise(() => {}));
    const pending = submitContact(idle, form(good));
    await vi.advanceTimersByTimeAsync(15_001);
    const state = await pending;
    expect(state.status).toBe("error");
    expect(state.status === "error" && state.form).toBe("generic");
  });
});
