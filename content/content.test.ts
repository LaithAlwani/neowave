import { describe, expect, it } from "vitest";
import { ar } from "./ar";
import { en } from "./en";

function keyPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((v, i) => keyPaths(v, `${prefix}[${i}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k));
  }
  return [prefix];
}

describe("content dictionaries", () => {
  it("have identical key paths in Arabic and English", () => {
    expect(keyPaths(ar).sort()).toEqual(keyPaths(en).sort());
  });

  it("carry the section counts from the design", () => {
    for (const c of [ar, en]) {
      expect(c.services.items).toHaveLength(4);
      expect(c.steps.items).toHaveLength(4);
      expect(c.pricing.packages).toHaveLength(3);
      expect(c.pricing.packages.filter((p) => p.featured)).toHaveLength(1);
      expect(c.strip.items).toHaveLength(3);
      expect(c.contact.info).toHaveLength(3);
      expect(c.nav.links).toHaveLength(4);
    }
  });

  it("point the language links at each other", () => {
    expect(ar.nav.lang.href).toBe("/en");
    expect(en.nav.lang.href).toBe("/");
    expect(ar.dir).toBe("rtl");
    expect(en.dir).toBe("ltr");
  });
});
