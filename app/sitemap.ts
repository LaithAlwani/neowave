import type { MetadataRoute } from "next";
import { absoluteUrl, localePath } from "@/lib/site";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

const lastModified = new Date("2026-10-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority, changeFrequency }) => {
    const languages = { ar: absoluteUrl(localePath("ar", path)), en: absoluteUrl(localePath("en", path)) };
    return (["ar", "en"] as const).map((locale) => ({
      url: languages[locale],
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
