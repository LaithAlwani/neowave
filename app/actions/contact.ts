"use server";

import { Resend } from "resend";
import { validateContact, type ContactInput, type FieldErrors } from "@/lib/validate-contact";

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; attempt: number; fields?: FieldErrors; form?: "generic"; values: ContactInput };

function text(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function submitContact(prev: ContactState, formData: FormData): Promise<ContactState> {
  const attempt = (prev.status === "error" ? prev.attempt : 0) + 1;
  const values: ContactInput = {
    name: text(formData.get("name")),
    phone: text(formData.get("phone")),
    kind: text(formData.get("kind")),
  };
  const locale = formData.get("locale") === "en" ? "en" : "ar";

  const validation = validateContact(values);
  if (!validation.ok) {
    return { status: "error", attempt, fields: validation.fields, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL; request not sent.");
    return { status: "error", attempt, form: "generic", values };
  }

  const { name, phone, kind } = validation.data;
  const body = [
    `Business name: ${name}`,
    `WhatsApp number: ${phone}`,
    `Type of business: ${kind}`,
    `Language: ${locale}`,
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject: `New website request: ${name}`,
      text: body,
    });
    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return { status: "error", attempt, form: "generic", values };
    }
    return { status: "sent" };
  } catch (err) {
    console.error("[contact] Failed to send:", err);
    return { status: "error", attempt, form: "generic", values };
  }
}
