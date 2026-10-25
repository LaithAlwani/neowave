import { describe, expect, it } from "vitest";
import { MAX_LENGTH, MAX_MESSAGE_LENGTH, normalizeDigits, validateContact } from "./validate-contact";

const good = {
  fullName: "Rami Haddad",
  email: "rami@example.com",
  phone: "+963 999 123 456",
  message: "A bakery in Hama. We want a site with a menu and WhatsApp orders.",
};

describe("validateContact", () => {
  it("accepts a complete request and trims the values", () => {
    const result = validateContact({ ...good, fullName: "  Rami Haddad  " });
    expect(result).toEqual({ ok: true, data: good });
  });

  it("requires name, email and phone but not the message", () => {
    expect(validateContact({})).toEqual({
      ok: false,
      fields: { fullName: "required", email: "required", phone: "required" },
    });
    expect(validateContact({ ...good, message: "" })).toEqual({ ok: true, data: { ...good, message: "" } });
  });

  it("treats whitespace-only values as missing", () => {
    const result = validateContact({ ...good, fullName: "   " });
    expect(result).toEqual({ ok: false, fields: { fullName: "required" } });
  });

  it("rejects values over the maximum length", () => {
    expect(validateContact({ ...good, fullName: "x".repeat(MAX_LENGTH + 1) })).toEqual({ ok: false, fields: { fullName: "tooLong" } });
    expect(validateContact({ ...good, message: "x".repeat(MAX_MESSAGE_LENGTH + 1) })).toEqual({ ok: false, fields: { message: "tooLong" } });
    expect(validateContact({ ...good, message: "x".repeat(MAX_MESSAGE_LENGTH) }).ok).toBe(true);
  });

  it("rejects a phone number that is not a number", () => {
    const result = validateContact({ ...good, phone: "call me" });
    expect(result).toEqual({ ok: false, fields: { phone: "phone" } });
  });

  it("rejects a malformed email address", () => {
    for (const email of ["rami", "rami@", "@example.com", "rami@example", "rami example@x.com"]) {
      expect(validateContact({ ...good, email })).toEqual({ ok: false, fields: { email: "email" } });
    }
  });

  it("accepts Arabic-Indic digits in the phone number", () => {
    const result = validateContact({ ...good, phone: "+٩٦٣ ٩٩٩ ١٢٣ ٤٥٦" });
    expect(result).toEqual({ ok: true, data: { ...good, phone: "+963 999 123 456" } });
  });

  it("normalizes both Arabic digit ranges", () => {
    expect(normalizeDigits("٠١٢٣٤٥٦٧٨٩")).toBe("0123456789");
    expect(normalizeDigits("۰۱۲۳۴۵۶۷۸۹")).toBe("0123456789");
  });
});
