import { describe, expect, it } from "vitest";
import { MAX_LENGTH, normalizeDigits, validateContact } from "./validate-contact";

const good = {
  fullName: "Rami Haddad",
  email: "rami@example.com",
  business: "Sunrise Bakery",
  phone: "+963 999 123 456",
  kind: "bakery",
};

describe("validateContact", () => {
  it("accepts a complete request and trims the values", () => {
    const result = validateContact({ ...good, business: "  Sunrise Bakery  " });
    expect(result).toEqual({ ok: true, data: good });
  });

  it("requires every field", () => {
    const result = validateContact({});
    expect(result).toEqual({
      ok: false,
      fields: { fullName: "required", email: "required", business: "required", phone: "required", kind: "required" },
    });
  });

  it("treats whitespace-only values as missing", () => {
    const result = validateContact({ ...good, kind: "   " });
    expect(result).toEqual({ ok: false, fields: { kind: "required" } });
  });

  it("rejects values over the maximum length", () => {
    const result = validateContact({ ...good, business: "x".repeat(MAX_LENGTH + 1) });
    expect(result).toEqual({ ok: false, fields: { business: "tooLong" } });
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
