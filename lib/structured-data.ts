import type { Content, LegalDoc } from "@/content/types";
import { absoluteUrl, localePath } from "./site";
import { normalizeDigits } from "./validate-contact";

const ORG_ID = "/#organization";
const SITE_ID = "/#website";

/** Design placeholders such as "[Who this package is for]" are left out of structured data. */
function real(value: string): string | undefined {
  return value.trim().startsWith("[") ? undefined : value;
}

function organization(c: Content) {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": absoluteUrl(ORG_ID),
    name: c.meta.siteName,
    alternateName: ["Neowave", "نيو ويف"],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/og"),
    image: absoluteUrl("/og"),
    description: c.meta.description,
    address: { "@type": "PostalAddress", addressLocality: "Hama", addressCountry: "SY" },
    areaServed: { "@type": "Country", name: "Syria" },
    knowsLanguage: ["ar", "en"],
    priceRange: "USD 9.99 - 99.99 per month",
    makesOffer: c.pricing.packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: real(p.audience),
      price: normalizeDigits(p.priceYearly),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: normalizeDigits(p.priceYearly),
        priceCurrency: "USD",
        billingIncrement: 1,
        unitCode: "MON",
        unitText: "month",
      },
      url: absoluteUrl(`${localePath(c.locale)}#pricing`),
      itemOffered: {
        "@type": "Service",
        name: p.name,
        serviceType: "Business website subscription",
        provider: { "@id": absoluteUrl(ORG_ID) },
      },
    })),
  };
}

function website(c: Content) {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl(SITE_ID),
    url: absoluteUrl("/"),
    name: c.meta.siteName,
    inLanguage: ["ar", "en"],
    publisher: { "@id": absoluteUrl(ORG_ID) },
  };
}

export function homeJsonLd(c: Content) {
  const url = absoluteUrl(localePath(c.locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(c),
      website(c),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: c.locale,
        isPartOf: { "@id": absoluteUrl(SITE_ID) },
        about: { "@id": absoluteUrl(ORG_ID) },
      },
      {
        "@type": "ItemList",
        name: c.services.h2,
        itemListElement: c.services.items.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Service", name: s.title, description: s.body, provider: { "@id": absoluteUrl(ORG_ID) } },
        })),
      },
      {
        "@type": "HowTo",
        name: c.steps.h2,
        description: c.steps.sub,
        step: c.steps.items.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
      },
    ],
  };
}

export function legalJsonLd(c: Content, doc: LegalDoc) {
  const url = absoluteUrl(localePath(c.locale, doc.path));
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: doc.title,
    description: doc.description,
    inLanguage: c.locale,
    dateModified: doc.updated,
    isPartOf: { "@id": absoluteUrl(SITE_ID) },
    publisher: { "@id": absoluteUrl(ORG_ID) },
  };
}
