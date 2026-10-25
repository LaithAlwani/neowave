export type ContactField = "fullName" | "email" | "phone" | "message";
export type FieldError = "required" | "tooLong" | "phone" | "email";
export type FieldErrors = Partial<Record<ContactField, FieldError>>;

export type ContactInput = Record<ContactField, string>;

export type ContactValidation = { ok: true; data: ContactInput } | { ok: false; fields: FieldErrors };

export const CONTACT_FIELDS: readonly ContactField[] = ["fullName", "email", "phone", "message"];
const REQUIRED: readonly ContactField[] = ["fullName", "email", "phone"];
export const MAX_LENGTH = 200;
export const MAX_MESSAGE_LENGTH = 2000;
const PHONE = /^\+?[\d\s()-]{6,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Arabic-Indic (U+0660..U+0669) and Extended Arabic-Indic (U+06F0..U+06F9) digits -> ASCII. */
export function normalizeDigits(value: string): string {
  return value.replace(/[٠-٩۰-۹]/g, (d) => {
    const code = d.charCodeAt(0);
    const base = code >= 0x06f0 ? 0x06f0 : 0x0660;
    return String(code - base);
  });
}

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContact(raw: Partial<Record<ContactField, unknown>>): ContactValidation {
  const data: ContactInput = {
    fullName: asText(raw.fullName),
    email: asText(raw.email),
    phone: normalizeDigits(asText(raw.phone)),
    message: asText(raw.message),
  };
  const fields: FieldErrors = {};

  for (const field of REQUIRED) {
    if (!data[field]) fields[field] = "required";
    else if (data[field].length > MAX_LENGTH) fields[field] = "tooLong";
  }
  if (!fields.phone && !PHONE.test(data.phone)) fields.phone = "phone";
  if (!fields.email && !EMAIL.test(data.email)) fields.email = "email";
  if (data.message.length > MAX_MESSAGE_LENGTH) fields.message = "tooLong";

  if (Object.keys(fields).length > 0) return { ok: false, fields };
  return { ok: true, data };
}

/** The form fields as submitted, untrimmed, so a failed attempt can echo them back. */
export function contactInputFromFormData(formData: FormData): ContactInput {
  const text = (value: FormDataEntryValue | null) => (typeof value === "string" ? value : "");
  const input = {} as ContactInput;
  for (const field of CONTACT_FIELDS) input[field] = text(formData.get(field));
  return input;
}
