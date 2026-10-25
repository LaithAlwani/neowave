import type { Locale } from "@/content/types";

/** Public origin of the deployed site, without a trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

/** Path of a page in a locale: localePath("en", "/terms") -> "/en/terms", localePath("ar", "/") -> "/". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  if (locale === "en") return `/en${clean}`;
  return clean || "/";
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}
