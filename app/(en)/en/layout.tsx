import type { Metadata } from "next";
import { en } from "@/content/en";
import { cairo, outfit } from "@/lib/fonts";
import "../../globals.css";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${cairo.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
