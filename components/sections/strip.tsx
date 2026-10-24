import { Icon } from "@/components/icons";
import type { Content } from "@/content/types";

export function Strip({ c }: { c: Content }) {
  const s = c.strip;
  return (
    <section className="n-strip" aria-label={s.aria}>
      <div className="n-wrap n-strip-in">
        <p>{s.title}</p>
        <div className="n-where">
          {s.items.map((item) => (
            <span key={item.label}>
              <Icon name={item.icon} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
