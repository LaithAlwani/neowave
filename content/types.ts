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

export interface Content {
  locale: Locale;
  dir: Dir;
  meta: { title: string; description: string };
  brand: { logoAria: string };
  nav: {
    aria: string;
    links: { href: string; label: string }[];
    contact: string;
    lang: { label: string; href: string; lang: Locale };
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
  services: { h2: string; sub: string; items: { icon: IconName; title: string; body: string }[] };
  steps: { h2: string; sub: string; items: { num: string; title: string; body: string }[] };
  ai: { h2: string; sub: string; chatAria: string; caption: string; messages: [string, string, string, string] };
  pricing: { h2: string; sub: string; includes: string; packages: [Package, Package, Package] };
  contact: {
    h2: string;
    sub: string;
    info: { icon: IconName; text: string; ltr?: boolean }[];
    fields: {
      name: { label: string };
      phone: { label: string; hint: string };
      kind: { label: string; hint: string };
    };
    submit: string;
    sending: string;
    note: string;
    sent: { badge: string; title: string; body: string };
    errors: { required: string; tooLong: string; phone: string; generic: string };
  };
  footer: { tagline: string };
  mobileBar: { cta: string };
}
