import type { LegalDoc } from "./types";

/* English legal pages. Structure (sections and paragraph counts) must mirror legal-ar.ts. */

export const termsEn: LegalDoc = {
  path: "/terms",
  title: "Terms of Service",
  description: "The terms that apply when you use the Neowave website or subscribe to a business website from Neowave in Hama, Syria.",
  updated: "2026-10-24",
  intro: "These terms apply to this website and to the website subscription service Neowave provides. By sending us a request or subscribing, you agree to them.",
  sections: [
    {
      h: "Who we are",
      p: [
        "Neowave is a web and AI company based in Hama, Syria. We build websites for small businesses and provide related services such as booking systems and AI chat agents.",
        "In these terms, \u201cwe\u201d and \u201cus\u201d mean Neowave, and \u201cyou\u201d means the business or person using our website or services.",
      ],
    },
    {
      h: "What we provide",
      p: [
        "We build your business website at no charge. You then pay a monthly subscription that keeps it online.",
        "The subscription includes hosting, a domain name, a weekly backup and up to three small edits per month. Larger changes, new pages and additional features are agreed separately.",
      ],
    },
    {
      h: "Subscription and payment",
      p: [
        "Packages and prices are listed on our home page in US dollars. The fee is paid monthly in advance.",
        "The minimum subscription term is twelve months. After that, either side can end the subscription with thirty days\u2019 written notice.",
        "If a payment is more than fourteen days late we may take the website offline after notifying you, and we may end the subscription if payment is not received within thirty days.",
      ],
    },
    {
      h: "Your content",
      p: [
        "You own the text, images, logos and other material you give us. You confirm that you have the right to use them and that they do not break any law or anyone\u2019s rights.",
        "You allow us to use that material to build and run your website. Unless you ask us not to, we may show your website as an example of our work.",
      ],
    },
    {
      h: "The website and domain",
      p: [
        "We design and build the website and keep ownership of the templates, code and tools we use. For as long as your subscription is active you have the right to use the website for your business.",
        "The domain name is registered for your business. If you end the subscription after the minimum term, we will help transfer the domain to you where the registrar allows it.",
      ],
    },
    {
      h: "Acceptable use",
      p: [
        "You agree not to use the website or any service we provide for anything unlawful, misleading or harmful, and not to send spam or try to interfere with the services.",
      ],
    },
    {
      h: "Availability and liability",
      p: [
        "We make reasonable efforts to keep your website online and backed up, but we cannot promise that it will never be interrupted.",
        "We are not liable for indirect losses such as lost profits or data lost after the latest backup. Our total liability for any claim is limited to the subscription fees you paid us in the three months before the claim.",
      ],
    },
    {
      h: "Changes to these terms",
      p: [
        "We may update these terms from time to time. The date at the top shows the latest version, and continuing to use the services after a change means you accept the updated terms.",
      ],
    },
    {
      h: "Governing law and contact",
      p: [
        "These terms are governed by the laws of the Syrian Arab Republic, and the courts of Hama have jurisdiction over any dispute.",
        "Questions about these terms: [Email address] or WhatsApp [WhatsApp number].",
      ],
    },
  ],
};

export const privacyEn: LegalDoc = {
  path: "/privacy",
  title: "Privacy Policy",
  description: "How Neowave collects, uses and protects the personal data you share through its website and contact form.",
  updated: "2026-10-24",
  intro: "This policy explains what personal data we collect when you use this website or contact us, why we collect it, and the choices you have.",
  sections: [
    {
      h: "What we collect",
      p: [
        "When you fill in the contact form we receive your name, email address, WhatsApp number and whatever you tell us about your business.",
        "When you visit the website, our hosting provider records standard technical data such as your IP address, browser type and the pages you open. We do not use it to identify you.",
      ],
    },
    {
      h: "Why we use it",
      p: [
        "We use your contact details to reply to your request, to discuss your website on WhatsApp or by email, and to prepare and run your subscription.",
        "We do not sell your data and we do not use it for advertising.",
      ],
    },
    {
      h: "Who receives it",
      p: [
        "Contact form requests are delivered to our mailbox through Resend, an email delivery service that processes the message on our behalf.",
        "The website is served by our hosting provider, which processes the technical data needed to deliver the pages. We do not share your data with anyone else unless the law requires it.",
      ],
    },
    {
      h: "How long we keep it",
      p: [
        "We keep contact requests for up to twelve months after we last spoke with you. If you become a client, we keep your details for as long as your subscription runs and for the period required by accounting rules afterwards.",
      ],
    },
    {
      h: "Cookies",
      p: ["This website does not set cookies and does not use analytics or tracking scripts."],
    },
    {
      h: "Your rights",
      p: [
        "You can ask us at any time to see, correct or delete the personal data we hold about you, or to stop contacting you. Write to us using the details below and we will respond within a reasonable time.",
      ],
    },
    {
      h: "Security",
      p: [
        "Your data is stored in our email and hosting systems, which are protected by access controls and encryption in transit. No system is completely secure, so please do not send us sensitive information you do not need to share.",
      ],
    },
    {
      h: "Children",
      p: ["Our services are intended for businesses. We do not knowingly collect data from anyone under eighteen."],
    },
    {
      h: "Changes and contact",
      p: [
        "We may update this policy; the date at the top shows the latest version.",
        "Privacy questions: [Email address] or WhatsApp [WhatsApp number].",
      ],
    },
  ],
};
