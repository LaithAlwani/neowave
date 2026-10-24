# Neowave marketing site

A Next.js 16 replica of the Neowave marketing page designed in Claude Design
(canvas: https://claude.ai/artifact/UMunQCddB8qJ28GGbMZ4XA).

- `/` Arabic (RTL), the default page
- `/en` English (LTR)
- One responsive layout: the desktop artboards above 640px, the mobile artboard at 640px and below

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; both routes are prerendered as static
npm test         # vitest: content parity + contact validation
npm run lint
```

## Contact form

The form posts to a Server Action (`app/actions/contact.ts`) that validates the three
fields and emails the request through [Resend](https://resend.com). Copy `.env.example`
to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Recipient (comma-separate for several) |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Neowave <hello@yourdomain.com>` |

Without these the action logs an error on the server and the form shows a generic
"not sent" message; nothing crashes.

## Where things live

| Path | What |
|---|---|
| `content/ar.ts`, `content/en.ts` | Every string on the page, including the bracketed placeholders from the design |
| `components/marketing-page.css` | Page styles ported from the artboards (desktop, `[dir="ltr"]` overrides, `<=640px` mobile block) |
| `app/globals.css` | Design tokens and the Neowave design-system component CSS |
| `components/ds/` | Button, Badge, TextField, PackageCard (ports of the design-system bundle) |
| `components/sections/` | One file per page section |
| `lib/fonts.ts` | Cairo and Outfit via `next/font/google` |
