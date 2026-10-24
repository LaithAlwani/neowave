import { Logo } from "@/components/logo";
import type { Content } from "@/content/types";

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="n-foot">
      <div className="n-wrap n-foot-in">
        <Logo label={c.brand.logoAria} />
        <p>{c.footer.tagline}</p>
        <a className="n-lang" href={c.nav.lang.href} lang={c.nav.lang.lang} hrefLang={c.nav.lang.lang}>
          {c.nav.lang.label}
        </a>
      </div>
    </footer>
  );
}
