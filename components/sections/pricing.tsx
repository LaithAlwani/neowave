"use client";

import { useState } from "react";
import { PackageCard } from "@/components/ds/package-card";
import type { Billing, Content } from "@/content/types";
import { cx } from "@/lib/cx";

export function Pricing({ c }: { c: Content }) {
  const p = c.pricing;
  const [billing, setBilling] = useState<Billing>("yearly");
  const b = p.billing;

  return (
    <section className="n-sec n-pricing" id="pricing">
      <div className="n-wrap">
        <h2 className="n-h2">{p.h2}</h2>
        <p className="n-sub">{p.sub}</p>
        <div className="n-billing" role="group" aria-label={`${b.yearly} / ${b.monthly}`}>
          {(["yearly", "monthly"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              className={cx("n-billing-btn", billing === mode && "is-on")}
              aria-pressed={billing === mode}
              onClick={() => setBilling(mode)}
            >
              {b[mode]}
              {mode === "yearly" ? <span className="n-billing-save">{b.save}</span> : null}
            </button>
          ))}
        </div>
        <div className="n-price-grid">
          {p.packages.map((pkg) => (
            <div key={pkg.name}>
              <PackageCard
                dir={c.dir}
                name={pkg.name}
                audience={pkg.audience}
                price={billing === "yearly" ? pkg.priceYearly : pkg.priceMonthly}
                period={b.period[billing]}
                features={pkg.features}
                featured={pkg.featured}
                badge={pkg.badge}
                cta={pkg.cta}
                note={b.note[billing]}
              />
            </div>
          ))}
        </div>
        <p className="n-incl">{p.includes}</p>
      </div>
    </section>
  );
}
