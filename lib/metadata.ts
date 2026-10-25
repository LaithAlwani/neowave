import type { Metadata } from "next";
import type { Content, LegalDoc, Locale } from "@/content/types";
import { localePath, siteUrl } from "./site";

const ogLocale: Record<Locale, string> = { ar: "ar_SY", en: "en_US" };

export interface PageMeta {
  locale: Locale;
  /** Locale-independent path, e.g. "/" or "/terms". */
  path: string;
  title: string;
  description: string;
  siteName: string;
  keywords?: string[];
}

/** Full metadata for one page: canonical + hreflang alternates, Open Graph, Twitter, robots. */
export function pageMetadata(m: PageMeta): Metadata {
  const url = localePath(m.locale, m.path);
  const other: Locale = m.locale === "ar" ? "en" : "ar";
  return {
    metadataBase: new URL(siteUrl),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    applicationName: m.siteName,
    alternates: {
      canonical: url,
      languages: {
        ar: localePath("ar", m.path),
        en: localePath("en", m.path),
        "x-default": localePath("ar", m.path),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: m.siteName,
      title: m.title,
      description: m.description,
      locale: ogLocale[m.locale],
      alternateLocale: [ogLocale[other]],
      images: [{ url: "/og", width: 1200, height: 630, alt: m.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    other: { "geo.region": "SY", "geo.placename": "Hama" },
  };
}

export function homeMetadata(c: Content): Metadata {
  return pageMetadata({
    locale: c.locale,
    path: "/",
    title: c.meta.title,
    description: c.meta.description,
    siteName: c.meta.siteName,
    keywords: c.meta.keywords,
  });
}

export function legalMetadata(c: Content, doc: LegalDoc): Metadata {
  return pageMetadata({
    locale: c.locale,
    path: doc.path,
    title: `${doc.title} | ${c.meta.siteName}`,
    description: doc.description,
    siteName: c.meta.siteName,
  });
}
