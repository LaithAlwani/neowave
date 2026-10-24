import { cx } from "@/lib/cx";
import { Badge } from "./badge";
import { buttonClassName } from "./button";
import { CheckIcon } from "./icons";

export interface PackageCardProps {
  name: string;
  audience?: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  cta?: string;
  href?: string;
  note?: string;
  dir?: "rtl" | "ltr";
  className?: string;
}

export function PackageCard({ name, audience, price, period, features, featured, badge, cta, href = "#contact", note, dir, className }: PackageCardProps) {
  return (
    <article className={cx("nw-card", featured && "nw-card--featured", className)} dir={dir}>
      {badge ? (
        <div>
          <Badge tone="brand">{badge}</Badge>
        </div>
      ) : null}
      <div>
        <h3 className="nw-card__name">{name}</h3>
        {audience ? <p className="nw-card__for">{audience}</p> : null}
      </div>
      <div className="nw-card__price">
        <span className="nw-card__amount">{price}</span>
        <span className="nw-card__period">{period}</span>
      </div>
      <ul className="nw-card__list">
        {features.map((f, i) => (
          <li key={i}>
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {cta ? (
        <a className={buttonClassName({ variant: featured ? "primary" : "secondary", block: true })} href={href}>
          {cta}
        </a>
      ) : null}
      {note ? <p className="nw-card__note">{note}</p> : null}
    </article>
  );
}
