import { describe, expect, it } from "vitest";
import { MAX_LENGTH, normalizeDigits, validateContact } from "./validate-contact";

describe("validateContact", () => {
  it("accepts a complete, well-formed request and trims whitespace", () => {
    const result = validateContact({ name: "  Al-Nawaeer Bakery ", phone: " +963 933 000 000 ", kind: "bakery" });
    expect(result).toEqual({ ok: true, data: { name: "Al-Nawaeer Bakery", phone: "+963 933 000 000", kind: "bakery" } });
  });

  it("flags every empty field as required", () => {
    const result = validateContact({ name: "", phone: "   ", kind: undefined });
    expect(result).toEqual({ ok: false, fields: { name: "required", phone: "required", kind: "required" } });
  });

  it("rejects values over the maximum length", () => {
    const long = "x".repeat(MAX_LENGTH + 1);
    const result = validateContact({ name: long, phone: "+963933000000", kind: long });
    expect(result).toEqual({ ok: false, fields: { name: "tooLong", kind: "tooLong" } });
  });

  it("rejects a phone number with letters or too few digits", () => {
    expect(validateContact({ name: "a", phone: "call me", kind: "b" })).toEqual({ ok: false, fields: { phone: "phone" } });
    expect(validateContact({ name: "a", phone: "12345", kind: "b" })).toEqual({ ok: false, fields: { phone: "phone" } });
  });

  it("accepts Arabic-Indic digits in the phone number and normalizes them", () => {
    const result = validateContact({ name: "مخبز", phone: "٠٩٣٣٠٠٠٠٠٠", kind: "مخبز" });
    expect(result).toEqual({ ok: true, data: { name: "مخبز", phone: "0933000000", kind: "مخبز" } });
  });

  it("ignores non-string values", () => {
    const result = validateContact({ name: 42 as unknown, phone: ["x"] as unknown, kind: {} as unknown });
    expect(result.ok).toBe(false);
  });
});

describe("normalizeDigits", () => {
  it("maps both Arabic-Indic ranges to ASCII", () => {
    expect(normalizeDigits("٠١٢٣٤٥٦٧٨٩")).toBe("0123456789");
    expect(normalizeDigits("۰۱۲۳۴۵۶۷۸۹")).toBe("0123456789");
    expect(normalizeDigits("+1 (555) 010")).toBe("+1 (555) 010");
  });
});
