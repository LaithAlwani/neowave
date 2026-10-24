"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import type { Content } from "@/content/types";

export function Nav({ c }: { c: Content }) {
  const [open, setOpen] = useState(false);
  const { nav } = c;

  return (
    <>
      <header className="n-wrap n-header">
        <nav className="n-nav" aria-label={nav.aria}>
          <Logo label={c.brand.logoAria} />
          <div className="n-links">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a className="n-lang" href={nav.lang.href} lang={nav.lang.lang} hrefLang={nav.lang.lang}>
            {nav.lang.label}
          </a>
          <a className="nw-btn nw-btn--primary" href="#contact">
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
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}
