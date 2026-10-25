import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import type { Content } from "@/content/types";

function ContactInfo({ c, className }: { c: Content; className: string }) {
  return (
    <div className={className}>
      {c.contact.info.map((row) => (
        <div key={row.text}>
          <Icon name={row.icon} />
          <span dir={row.ltr ? "ltr" : undefined}>{row.text}</span>
        </div>
      ))}
    </div>
  );
}

export function Contact({ c }: { c: Content }) {
  const t = c.contact;
  return (
    <section className="n-sec n-sunk" id="contact">
      <div className="n-wrap">
        <div className="n-cc">
          <div className="n-cc-side">
            <svg className="n-cc-wave" data-inview="" viewBox="0 0 600 170" fill="none" aria-hidden="true">
              <path className="n-draw" pathLength={1} d="M-20 120 C 80 20, 190 20, 290 95 S 470 170, 620 60" stroke="#0e9384" strokeWidth={18} strokeLinecap="round" />
              <path className="n-draw" pathLength={1} d="M-20 150 C 90 70, 200 70, 300 130 S 480 190, 620 110" stroke="#3dd6c3" strokeWidth={4} strokeLinecap="round" opacity={0.7} />
            </svg>
            <h2 className="n-h2">{t.h2}</h2>
            <p className="n-sub">{t.sub}</p>
            {/* Desktop: inside the navy side (Main/English artboards). */}
            <ContactInfo c={c} className="n-info" />
          </div>
          <ContactForm c={c} />
          {/* Mobile: below the form (Mobile artboard). CSS shows one or the other. */}
          <ContactInfo c={c} className="n-info n-info-m" />
        </div>
      </div>
    </section>
  );
}
