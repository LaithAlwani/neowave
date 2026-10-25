# Neowave marketing site

A Next.js 16 replica of the Neowave marketing page designed in Claude Design
(canvas: https://claude.ai/artifact/UMunQCddB8qJ28GGbMZ4XA).

- `/` Arabic (RTL), the default page; `/terms` and `/privacy`
- `/en` English (LTR); `/en/terms` and `/en/privacy`
- One responsive layout: the desktop artboards above 640px, the mobile artboard at 640px and below

## SEO and GEO

Every page builds its metadata through `lib/metadata.ts`: canonical URL, `hreflang`
alternates (`ar`, `en`, `x-default`), Open Graph and Twitter cards, robots directives and
geo tags. `app/robots.ts` and `app/sitemap.ts` serve `/robots.txt` and `/sitemap.xml`
(with language alternates), `app/og/route.tsx` renders the shared social
image at `/og`, and `public/llms.txt` gives AI crawlers a plain-text summary.
The home page embeds schema.org JSON-LD (`lib/structured-data.ts`: Organization with the
three package offers, WebSite, WebPage, the services list and the how-we-start steps);
legal pages embed a WebPage entry. Set `NEXT_PUBLIC_SITE_URL` so absolute URLs point at
the live domain.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; both routes are prerendered as static
npm test         # vitest: content parity + contact validation
npm run lint
```

## Contact form

The form posts to a Server Action (`app/actions/contact.ts`) that validates the
fields and emails the request through [Resend](https://resend.com). Copy `.env.example`
to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public origin of the site, e.g. `https://www.example.com` (metadata, sitemap, robots) |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Recipient (comma-separate for several) |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Neowave <hello@yourdomain.com>` |

Without these the request is still accepted: the server logs the submitted details (so
nothing is lost), the form shows its success panel, and a success-styled toast says that
Resend still needs setting up. A failed or timed-out Resend call (15 s) shows the generic
"not sent" message with the typed values kept. The action never throws, and the form also
catches a failed network call, so the page never falls over to an error boundary.

## Where things live

| Path | What |
|---|---|
| `content/ar.ts`, `content/en.ts` | Every string on the page, including the bracketed placeholders from the design |
| `content/legal-ar.ts`, `content/legal-en.ts` | Terms of Service and Privacy Policy text (section counts must match; a test checks this) |
| `components/legal-page.tsx` | Layout shared by the four legal routes |
| `components/in-view.tsx` | Starts the wave stroke animations when their SVG scrolls into view |
| `components/marketing-page.css` | Page styles ported from the artboards (desktop, `[dir="ltr"]` overrides, `<=640px` mobile block) |
| `app/globals.css` | Design tokens and the Neowave design-system component CSS |
| `components/ds/` | Button, Badge, TextField, PackageCard (ports of the design-system bundle) |
| `components/sections/` | One file per page section |
| `lib/fonts.ts` | Cairo and Outfit via `next/font/google` |
