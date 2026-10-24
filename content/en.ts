import type { Content } from "./types";

/* Strings copied from the Claude Design artboard English.dc.html.
   Bracketed values are placeholders kept from the design. */
export const en: Content = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "Neowave — Home",
    description: "Web and AI solutions, Hama, Syria",
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
    lang: { label: "العربية", href: "/", lang: "ar" },
    menuAria: "Menu",
  },
  hero: {
    badge: "Your website is built free",
    h1: "Be found online, trusted, and chosen",
    lead: "Neowave is a web and AI company in Hama. We build your business website at no charge, and you pay a small monthly fee starting at USD 10.",
    primary: "Start your website",
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
      { icon: "people", label: "Facebook" },
    ],
  },
  services: {
    h2: "What we build for your business",
    sub: "We start with a clear, phone-first website, then add what your business needs as it grows.",
    items: [
      { icon: "browser", title: "Website", body: "A phone-first site in Arabic and English that makes it easy for customers to find and call you." },
      { icon: "calendar", title: "Booking system", body: "Customers book an appointment or order themselves, and the details reach you directly." },
      { icon: "chat", title: "AI chat agent", body: "Answers common questions and takes orders, so no customer is lost to a slow reply." },
      { icon: "face", title: "Digital characters", body: "A character that represents your brand and talks to customers in your style." },
    ],
  },
  steps: {
    h2: "How we start",
    sub: "Four steps, and you pay nothing until you have seen your website.",
    items: [
      { num: "1", title: "Talk to us", body: "Tell us what you offer, who your customers are, and where they find you today." },
      { num: "2", title: "We build your site", body: "We create it at no charge, and you review it with us before it goes live." },
      { num: "3", title: "Choose a package", body: "A fixed monthly fee covering hosting, your domain, and a weekly backup." },
      { num: "4", title: "We grow with you", body: "We make your small edits, and add bookings or the AI agent when you need them." },
    ],
  },
  ai: {
    h2: "An agent that replies when you can't",
    sub: "It answers common questions, takes orders, and hands the conversation to you when it matters. You stay in charge.",
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
    sub: "Building your website costs nothing. You pay a monthly fee in advance, with a minimum term of 12 months.",
    includes: "The monthly fee includes hosting, your domain, a weekly backup, and up to 3 small edits.",
    packages: [
      {
        name: "Starter",
        audience: "For small shops and new businesses",
        price: "10",
        period: "USD per month",
        features: ["Hosting", "Domain", "Weekly backup", "Up to 3 small edits"],
        cta: "Choose Starter",
        note: "Minimum term: 12 months",
      },
      {
        name: "Business",
        audience: "[Who this package is for]",
        price: "15",
        period: "USD per month",
        features: ["[Business feature 1]", "[Business feature 2]", "[Business feature 3]"],
        cta: "Choose Business",
        note: "Minimum term: 12 months",
        featured: true,
        badge: "Most popular",
      },
      {
        name: "Booking",
        audience: "[Who this package is for]",
        price: "30",
        period: "USD per month",
        features: ["Online booking for customers", "[Booking feature 1]", "[Booking feature 2]"],
        cta: "Choose Booking",
        note: "Minimum term: 12 months",
      },
    ],
  },
  contact: {
    h2: "Tell us about your business",
    sub: "Send us your business name and type, and we will message you on WhatsApp.",
    info: [
      { icon: "whatsapp", text: "[WhatsApp number]", ltr: true },
      { icon: "mail", text: "[Email address]", ltr: true },
      { icon: "pin", text: "Hama, Syria" },
    ],
    fields: {
      name: { label: "Business name" },
      phone: { label: "WhatsApp number", hint: "Include the country code" },
      kind: { label: "Type of business", hint: "For example: bakery, clinic, salon" },
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
      generic: "The request was not sent. Try again or message us on WhatsApp.",
    },
  },
  footer: { tagline: "Web and AI solutions, Hama, Syria" },
  mobileBar: { cta: "Start your website" },
};
