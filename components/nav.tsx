"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import type { Content } from "@/content/types";
import { localePath } from "@/lib/site";

/** `path` is the locale-independent path of the current page ("/" for home), used for the language link. */
export function Nav({ c, path = "/" }: { c: Content; path?: string }) {
  const [open, setOpen] = useState(false);
  const { nav } = c;
  const home = localePath(c.locale);

  return (
    <>
      <header className="n-wrap n-header">
        <nav className="n-nav" aria-label={nav.aria}>
          <Logo label={c.brand.logoAria} href={home} />
          <div className="n-links">
            {nav.links.map((l) => (
              <a key={l.href} href={`${home}${l.href}`}>
                {l.label}
              </a>
            ))}
          </div>
          <a className="n-lang" href={localePath(nav.lang.lang, path)} lang={nav.lang.lang} hrefLang={nav.lang.lang}>
            {nav.lang.label}
          </a>
          <a className="nw-btn nw-btn--primary" href={`${home}#contact`}>
            {nav.contact}
          </a>
          <button
            className="n-menu-btn"
            type="button"
            aria-label={nav.menuAria}
            aria-expanded={open}
            aria-controls="n-sheet"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>
      {open ? (
        <nav className="n-sheet" id="n-sheet" aria-label={nav.aria}>
          {nav.links.map((l) => (
            <a key={l.href} href={`${home}${l.href}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}
