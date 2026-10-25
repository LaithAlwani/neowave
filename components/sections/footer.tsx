import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import type { Content } from "@/content/types";
import { localePath } from "@/lib/site";

export function Footer({ c, path = "/" }: { c: Content; path?: string }) {
  return (
    <footer className="n-foot">
      <div className="n-wrap n-foot-in">
        <Logo label={c.brand.logoAria} href={localePath(c.locale)} />
        <p>{c.footer.tagline}</p>
        <nav className="n-foot-links" aria-label={c.nav.aria}>
          {c.footer.links.map((l) => (
            <a key={l.href} href={localePath(c.locale, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="n-lang" href={localePath(c.nav.lang.lang, path)} lang={c.nav.lang.lang} hrefLang={c.nav.lang.lang} aria-label={c.nav.lang.label} title={c.nav.lang.label}>
          <Icon name="globe" className="n-lang-ic" />
        </a>
      </div>
    </footer>
  );
}
