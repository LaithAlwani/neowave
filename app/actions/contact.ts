"use server";

import { Resend } from "resend";
import {
  contactInputFromFormData,
  validateContact,
  type ContactInput,
  type FieldErrors,
} from "@/lib/validate-contact";

/** Something the visitor should know even though the request went through. */
export type ContactNotice = "resendNotConfigured";

export type ContactState =
  | { status: "idle" }
  | { status: "sent"; notice?: ContactNotice }
  | { status: "error"; attempt: number; fields?: FieldErrors; form?: "generic"; values: ContactInput };

/** How long to wait for Resend before giving up and showing the generic error. */
const SEND_TIMEOUT_MS = 15_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      },
    );
  });
}

function env(name: string): string {
  return (process.env[name] ?? "").trim();
}

/**
 * Validates the form and emails the request through Resend.
 * Never throws: every failure becomes a `ContactState` the form can render.
 */
export async function submitContact(prev: ContactState, formData: FormData): Promise<ContactState> {
  const attempt = (prev.status === "error" ? prev.attempt : 0) + 1;
  const values = contactInputFromFormData(formData);
  const locale = formData.get("locale") === "en" ? "en" : "ar";
  const fail = (): ContactState => ({ status: "error", attempt, form: "generic", values });

  const validation = validateContact(values);
  if (!validation.ok) {
    return { status: "error", attempt, fields: validation.fields, values };
  }

  const { fullName, email, business, phone, kind } = validation.data;
  const body = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Business name: ${business}`,
    `WhatsApp number: ${phone}`,
    `Type of business: ${kind}`,
    `Language: ${locale}`,
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  const apiKey = env("RESEND_API_KEY");
  const to = env("CONTACT_TO_EMAIL")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = env("CONTACT_FROM_EMAIL");

  if (!apiKey || to.length === 0 || !from) {
    // Resend is not set up yet. Accept the request, keep it in the server log so it is
    // not lost, and let the page show the "needs setting up" toast.
    console.warn(
      "[contact] Resend is not configured (set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL). " +
        "Request received but no email was sent:\n" +
        body,
    );
    return { status: "sent", notice: "resendNotConfigured" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await withTimeout(
      resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `New website request: ${business.replace(/\s+/g, " ")}`,
        text: body,
      }),
      SEND_TIMEOUT_MS,
    );
    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return fail();
    }
    return { status: "sent" };
  } catch (err) {
    console.error("[contact] Failed to send:", err);
    return fail();
  }
}
