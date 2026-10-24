import { Icon } from "@/components/icons";
import type { Content } from "@/content/types";

export function Services({ c }: { c: Content }) {
  const s = c.services;
  return (
    <section className="n-sec" id="services">
      <div className="n-wrap n-svc">
        <div>
          <h2 className="n-h2">{s.h2}</h2>
          <p className="n-sub">{s.sub}</p>
        </div>
        <div className="n-svc-list">
          {s.items.map((item) => (
            <div className="n-svc-item" key={item.title}>
              <span className="n-svc-ic">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className="n-h3">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
