export type ContactField = "name" | "phone" | "kind";
export type FieldError = "required" | "tooLong" | "phone";
export type FieldErrors = Partial<Record<ContactField, FieldError>>;

export interface ContactInput {
  name: string;
  phone: string;
  kind: string;
}

export type ContactValidation = { ok: true; data: ContactInput } | { ok: false; fields: FieldErrors };

export const MAX_LENGTH = 200;
const PHONE = /^\+?[\d\s()-]{6,20}$/;

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
  const name = asText(raw.name);
  const phone = normalizeDigits(asText(raw.phone));
  const kind = asText(raw.kind);
  const fields: FieldErrors = {};

  if (!name) fields.name = "required";
  else if (name.length > MAX_LENGTH) fields.name = "tooLong";

  if (!phone) fields.phone = "required";
  else if (phone.length > MAX_LENGTH) fields.phone = "tooLong";
  else if (!PHONE.test(phone)) fields.phone = "phone";

  if (!kind) fields.kind = "required";
  else if (kind.length > MAX_LENGTH) fields.kind = "tooLong";

  if (Object.keys(fields).length > 0) return { ok: false, fields };
  return { ok: true, data: { name, phone, kind } };
}
