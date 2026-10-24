import type { Metadata } from "next";
import { ar } from "@/content/ar";
import { cairo, outfit } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: ar.meta.title,
  description: ar.meta.description,
};

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
