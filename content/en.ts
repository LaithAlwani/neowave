import { privacyEn, termsEn } from "./legal-en";
import type { Content } from "./types";

/* Strings copied from the Claude Design artboard English.dc.html.
   Bracketed values are placeholders kept from the design. */
export const en: Content = {
  locale: "en",
  dir: "ltr",
  meta: {
    siteName: "Neowave",
    title: "Neowave | Online presence for companies in Hama, Syria",
    description:
      "Neowave sets up your company's online presence: a website built free, WhatsApp Business, social media accounts, a visual identity and ad images, from USD 9.99 a month. Hama, Syria.",
    keywords: ["online presence Hama", "web design Syria", "WhatsApp Business setup", "social media accounts setup", "visual identity design", "Neowave"],
  },
  brand: { logoAria: "Neowave" },
  nav: {
    aria: "Main",
    links: [
      { href: "#services", label: "Services" },
      { href: "#start", label: "How we start" },
      { href: "#pricing", label: "Packages" },
      { href: "#contact", label: "Contact" },
    ],
    contact: "Contact us",
    lang: { label: "العربية", lang: "ar" },
    menuAria: "Menu",
  },
  hero: {
    badge: "Your online presence, set up for you",
    h1: "Be found online, trusted, and chosen",
    lead:
      "Neowave sets up your company's online presence in Hama: a website, WhatsApp Business, social media accounts and a visual identity that looks professional everywhere. The website is built free, and you pay a small fee starting at USD 9.99 a month, billed yearly.",
    primary: "Get set up online",
    secondary: "See packages",
    phoneAria: "Example of a local business website on a phone",
    phone: {
      title: "Al-Nawaeer Bakery",
      headline: "Fresh bread every morning",
      pills: ["Call", "WhatsApp", "Website"],
      map: "Hama",
    },
    bubbles: ["Do you take orders for Friday?", "Yes. How many people?"],
  },
  strip: {
    aria: "Where your business appears",
    title: "Show up where people are looking",
    items: [
      { icon: "pin", label: "Google Maps" },
      { icon: "whatsapp", label: "WhatsApp" },
      { icon: "people", label: "Facebook and Instagram" },
    ],
  },
  services: {
    h2: "Everything your company needs to be present online",
    sub: "Most companies have none of this set up properly. We do it all for you, with one consistent look, so customers find you and trust you.",
    items: [
      { icon: "browser", title: "Website", body: "A phone-first site in Arabic and English that shows what you offer and makes it easy to call or message you." },
      { icon: "whatsapp", title: "WhatsApp Business", body: "A proper business account with your profile, catalogue, greeting and quick replies, so customers can order and ask in one tap." },
      { icon: "people", title: "Social media accounts", body: "Facebook, Instagram and your Google Maps listing, set up with the right name, logo, hours and contact details." },
      { icon: "palette", title: "Visual identity", body: "Your logo, colours and fonts, applied consistently on your website, profiles and covers, so you look like one company." },
      { icon: "image", title: "Social media ad images", body: "Ready-to-post designs for your offers and announcements, in your identity and sized for each platform." },
    ],
    addons: {
      title: "Also available as separate services",
      items: [
        { icon: "calendar", title: "Booking system", body: "Customers book an appointment or order themselves, and the details reach you directly." },
        { icon: "chat", title: "AI chat agent and automation", body: "Answers common questions, takes orders, and connects to the tools you already use." },
        { icon: "phone", title: "Custom social media app", body: "Your own app for your community, with your identity and the features you need." },
        { icon: "face", title: "Digital characters", body: "A character that represents your brand and talks to customers in your style." },
      ],
    },
  },
  steps: {
    h2: "How we start",
    sub: "Four steps, and you pay nothing until you have seen your website.",
    items: [
      { num: "1", title: "Talk to us", body: "Tell us what you offer, who your customers are, and where they find you today." },
      { num: "2", title: "We set you up", body: "We build your website at no charge and set up WhatsApp Business, your social accounts and your identity. You review everything before it goes live." },
      { num: "3", title: "Choose a package", body: "A fixed monthly fee covering hosting, your domain, a weekly backup and small edits." },
      { num: "4", title: "We keep you present", body: "We make your small edits, design your ad images, and add bookings or the AI agent when you need them." },
    ],
  },
  ai: {
    h2: "An agent that replies when you can't",
    sub: "It answers common questions, takes orders, and hands the conversation to you when it matters. You stay in charge. Available as a separate service.",
    chatAria: "Example chat between a customer and an AI agent taking an order for Friday",
    caption: "Example conversation",
    messages: [
      "Do you take orders for Friday?",
      "Welcome. Yes, we do. How many people are you expecting?",
      "About 20 people.",
      "Your order is noted. The owner will contact you to confirm details and price.",
    ],
  },
  pricing: {
    h2: "Three packages, clear prices",
    sub: "Building your website costs nothing. Pay for a year and save more than 60%, or pay month by month.",
    includes: "Every package includes hosting, your domain, a weekly backup and the setup of your online presence.",
    billing: {
      yearly: "Yearly",
      monthly: "Monthly",
      save: "Save over 60%",
      period: { yearly: "USD a month, billed yearly", monthly: "USD a month" },
      note: { yearly: "Paid once a year, in advance", monthly: "No yearly commitment" },
    },
    packages: [
      {
        name: "Starter",
        audience: "For small shops and new companies",
        priceYearly: "9.99",
        priceMonthly: "29.99",
        features: ["Website, hosting and domain", "Google Maps listing", "WhatsApp Business profile", "Weekly backup", "3 small edits a month"],
        cta: "Choose Starter",
      },
      {
        name: "Business",
        audience: "For companies that take orders or appointments",
        priceYearly: "19.99",
        priceMonthly: "59.99",
        features: ["Everything in Starter", "Online booking system", "Facebook and Instagram set up", "Visual identity kit", "2 ad images a month", "5 small edits a month"],
        cta: "Choose Business",
        featured: true,
        badge: "Most popular",
      },
      {
        name: "Growth",
        audience: "For companies that want to manage their customers and grow",
        priceYearly: "39.99",
        priceMonthly: "99.99",
        features: ["Everything in Business", "Customer CRM: records, follow-ups and history", "4 ad images a month", "Monthly check-in on your profiles and listing", "10 small edits a month"],
        cta: "Choose Growth",
      },
    ],
  },
  contact: {
    h2: "Tell us about your business",
    sub: "Send us your details and a few words about your business, and we will message you on WhatsApp.",
    info: [
      { icon: "whatsapp", text: "[WhatsApp number]", ltr: true },
      { icon: "mail", text: "[Email address]", ltr: true },
      { icon: "pin", text: "Hama, Syria" },
    ],
    fields: {
      fullName: { label: "Your name" },
      email: { label: "Email address", hint: "We reply here if WhatsApp does not reach you" },
      phone: { label: "WhatsApp number", hint: "Include the country code" },
      message: { label: "About your business", placeholder: "Tell us about your business and what you are looking for" },
    },
    submit: "Send request",
    sending: "Sending…",
    note: "We will message you on WhatsApp. Building your website is free.",
    sent: {
      badge: "Sent",
      title: "We got your request",
      body: "We will message you on WhatsApp to learn more about your business.",
    },
    errors: {
      required: "This field is required",
      tooLong: "This is too long",
      phone: "Enter a valid number with the country code",
      email: "Enter a valid email address",
      generic: "The request was not sent. Try again or message us on WhatsApp.",
    },
    toast: {
      resendNotConfigured: "Request received. Email delivery still needs setting up: add the Resend keys to .env.local.",
      dismiss: "Dismiss",
    },
  },
  footer: { tagline: "Web and AI solutions, Hama, Syria", links: [{ href: "/terms", label: "Terms" }, { href: "/privacy", label: "Privacy" }] },
  mobileBar: { cta: "Get set up online" },
  legal: { updatedLabel: "Last updated", terms: termsEn, privacy: privacyEn },
};
