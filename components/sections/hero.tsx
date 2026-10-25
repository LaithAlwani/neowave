import { Badge } from "@/components/ds/badge";
import { buttonClassName } from "@/components/ds/button";
import { Icon } from "@/components/icons";
import type { Content } from "@/content/types";

function MockRow({ delay, className = "" }: { delay: string; className?: string }) {
  return (
    <div className={`n-b n-row ${className}`.trim()} style={{ animationDelay: delay }}>
      <span className="n-sq" />
      <span className="n-bars">
        <i />
        <i />
      </span>
    </div>
  );
}

export function Hero({ c }: { c: Content }) {
  const h = c.hero;
  return (
    <section className="n-hero">
      <svg className="n-hero-wave" data-inview="" viewBox="0 0 1200 220" fill="none" aria-hidden="true">
        <path
          className="n-draw"
          pathLength={1}
          d="M-20 150 C 150 40, 300 40, 450 130 S 750 220, 900 110 S 1100 40, 1220 100"
          stroke="#e3f4f2"
          strokeWidth={26}
          strokeLinecap="round"
        />
      </svg>
      <div className="n-wrap">
        <div className="n-hero-grid">
          <div>
            <Badge tone="brand">{h.badge}</Badge>
            <h1 className="n-h1">{h.h1}</h1>
            <p className="n-lead">{h.lead}</p>
            <div className="n-cta">
              <a className={buttonClassName({ variant: "primary", size: "lg" })} href="#contact">
                {h.primary}
              </a>
              <a className={buttonClassName({ variant: "secondary", size: "lg" })} href="#pricing">
                {h.secondary}
              </a>
            </div>
          </div>
          <div className="n-phone-wrap">
            <div className="n-phone" role="img" aria-label={h.phoneAria}>
              <div className="n-ph">
                <div className="n-b n-ph-top" style={{ animationDelay: ".3s" }}>
                  <span>{h.phone.title}</span>
                  <span className="n-burger">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div className="n-b n-ph-hero" style={{ animationDelay: ".7s" }}>
                  <strong>{h.phone.headline}</strong>
                  <svg viewBox="0 0 300 70" fill="none" aria-hidden="true">
                    <path d="M-10 40 C 40 5, 90 5, 140 38 S 230 66, 310 20" stroke="#0e9384" strokeWidth={9} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="n-b n-pills" style={{ animationDelay: "1.1s" }}>
                  <span className="n-pill">{h.phone.pills[0]}</span>
                  <span className="n-pill">{h.phone.pills[1]}</span>
                  <span className="n-pill alt">{h.phone.pills[2]}</span>
                </div>
                <MockRow delay="1.4s" />
                <MockRow delay="1.65s" />
                <MockRow delay="1.9s" className="n-row-3" />
                <div className="n-b n-map" style={{ animationDelay: "2.15s" }}>
                  <Icon name="pin" />
                  {h.phone.map}
                </div>
              </div>
            </div>
            <div className="n-float" aria-hidden="true">
              <div className="n-fm c">{h.bubbles[0]}</div>
              <div className="n-fm a">{h.bubbles[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
