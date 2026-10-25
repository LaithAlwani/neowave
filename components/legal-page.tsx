import "./marketing-page.css";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import type { Content, LegalDoc } from "@/content/types";
import { legalJsonLd } from "@/lib/structured-data";

export function LegalPage({ c, doc }: { c: Content; doc: LegalDoc }) {
  const updated = new Date(doc.updated).toLocaleDateString(c.locale === "ar" ? "ar-SY" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="n-pg n-pg--legal" dir={c.dir} lang={c.locale}>
      <JsonLd data={legalJsonLd(c, doc)} />
      <Nav c={c} path={doc.path} />
      <main id="top" className="n-legal">
        <article className="n-wrap">
          <h1 className="n-h2">{doc.title}</h1>
          <p className="n-legal-meta">
            {c.legal.updatedLabel} <time dateTime={doc.updated}>{updated}</time>
          </p>
          <p className="n-sub">{doc.intro}</p>
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2 className="n-h3">{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list ? (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </main>
      <Footer c={c} path={doc.path} />
    </div>
  );
}
