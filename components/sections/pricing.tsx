import { PackageCard } from "@/components/ds/package-card";
import type { Content } from "@/content/types";

export function Pricing({ c }: { c: Content }) {
  const p = c.pricing;
  return (
    <section className="n-sec n-pricing" id="pricing">
      <div className="n-wrap">
        <h2 className="n-h2">{p.h2}</h2>
        <p className="n-sub">{p.sub}</p>
        <div className="n-price-grid">
          {p.packages.map((pkg) => (
            <div key={pkg.name}>
              <PackageCard dir={c.dir} {...pkg} />
            </div>
          ))}
        </div>
        <p className="n-incl">{p.includes}</p>
      </div>
    </section>
  );
}
