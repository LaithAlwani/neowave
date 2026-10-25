import type { Metadata } from "next";
import { cairo, outfit } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import "../../globals.css";

/* Page-level metadata (title, description, alternates, Open Graph) lives in each page via lib/metadata.ts. */
export const metadata: Metadata = { metadataBase: new URL(siteUrl) };

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${cairo.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
