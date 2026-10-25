import type { IconName } from "@/components/icons";

export type Locale = "ar" | "en";
export type Dir = "rtl" | "ltr";

export interface Package {
  name: string;
  audience: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  note: string;
  featured?: boolean;
  badge?: string;
}

export interface LegalSection {
  h: string;
  p: string[];
  list?: string[];
}

export interface LegalDoc {
  /** Locale-independent path, e.g. "/terms". */
  path: string;
  title: string;
  description: string;
  /** ISO date of the last revision, shown on the page. */
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface Content {
  locale: Locale;
  dir: Dir;
  meta: { siteName: string; title: string; description: string; keywords: string[] };
  brand: { logoAria: string };
  nav: {
    aria: string;
    /** Hash links into the home page, e.g. "#services". */
    links: { href: string; label: string }[];
    contact: string;
    lang: { label: string; lang: Locale };
    menuAria: string;
  };
  hero: {
    badge: string;
    h1: string;
    lead: string;
    primary: string;
    secondary: string;
    phoneAria: string;
    phone: { title: string; headline: string; pills: [string, string, string]; map: string };
    bubbles: [string, string];
  };
  strip: { aria: string; title: string; items: { icon: IconName; label: string }[] };
  services: {
    h2: string;
    sub: string;
    /** What every package sets up: the company's online presence. */
    items: { icon: IconName; title: string; body: string }[];
    /** Services sold separately from the packages. */
    addons: { title: string; items: { icon: IconName; title: string; body: string }[] };
  };
  steps: { h2: string; sub: string; items: { num: string; title: string; body: string }[] };
  ai: { h2: string; sub: string; chatAria: string; caption: string; messages: [string, string, string, string] };
  pricing: { h2: string; sub: string; includes: string; packages: [Package, Package, Package] };
  contact: {
    h2: string;
    sub: string;
    info: { icon: IconName; text: string; ltr?: boolean }[];
    fields: {
      fullName: { label: string };
      email: { label: string; hint: string };
      phone: { label: string; hint: string };
      /** Optional free-text field that replaced "business name" and "type of business". */
      message: { label: string; placeholder: string };
    };
    submit: string;
    sending: string;
    note: string;
    sent: { badge: string; title: string; body: string };
    errors: { required: string; tooLong: string; phone: string; email: string; generic: string };
    toast: { resendNotConfigured: string; dismiss: string };
  };
  footer: { tagline: string; links: { href: string; label: string }[] };
  mobileBar: { cta: string };
  legal: { updatedLabel: string; terms: LegalDoc; privacy: LegalDoc };
}
