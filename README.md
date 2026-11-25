# NEXTECH ACADEMY — Official Website

A website for **NEXTECH ACADEMY**, Ghouri Town Phase-5, Islamabad, designed as an *antique
prospectus*: parchment, iron-gall ink, copper and bottle-green, engraved plates, wax seals and a
letterpress feel — not another dark SaaS template.
Built with **React 19 + Vite**, fully responsive, six pages, working student-portal link.

---

## 1. Open the website (fastest way)

**Windows:** double-click **`START-WEBSITE.bat`**.

It will:
1. install the dependencies (first time only),
2. start the local server,
3. open **http://localhost:5173** in your browser.

> Keep the black command window open while you browse. Press `Ctrl + C` inside it to stop the site.

### Manual way (if you prefer)

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

---

## 2. Build for real hosting

```bash
npm run build
```

This creates a `dist/` folder. Upload the **contents of `dist/`** to your hosting, or deploy the repo
to Netlify / Vercel. Config files are already included:

- `netlify.toml` — build, SPA redirect, security + long-cache headers (see §12 for the
  Content-Security-Policy and HSTS that are already configured)
- `vercel.json` — SPA rewrite and the same headers
- `public/_redirects` — Netlify fallback for direct page URLs (`/courses`, `/admissions`, …)
- `public/robots.txt` + `public/sitemap.xml`

The site uses client-side routing, so the host must send unknown paths to `index.html` (already
handled by the configs above).

> The production URL is currently a placeholder: **`https://nextechacademy.pk`**.
> Before launch, replace it in `index.html` (canonical, Open Graph, JSON-LD) and in
> `public/sitemap.xml` / `public/robots.txt` with your real domain.

### Performance guardrails

The site is tuned for smooth 60 fps scrolling on ordinary laptops and phones. Keep these rules when
editing:

- The paper colour, vignette and grain are one fixed, pre-blended `.page-texture` layer. Never add
  a full-viewport `mix-blend-mode` overlay or `background-attachment: fixed` — both force the
  browser to re-blend/repaint the whole page on every scroll frame.
- No `backdrop-filter` on sticky or fixed chrome (header, jump nav); use a near-opaque background.
- Reveal animations use opacity/transform only; avoid leaving `will-change` on long lists of blocks.
- The header progress bar and back-to-top button share one rAF-throttled, passive scroll listener and
  write to the DOM directly instead of re-rendering React on every frame.
- Secondary routes are lazy-loaded, and every photo is a compressed JPEG sized for where it is shown
  (the superseded PNG/JPG masters are not part of the deployed build).
- `/build/*` (hashed JS/CSS) is cached for a year and `/assets/img/*` for a month — bump the image
  filenames when you replace a photo.

---

## 3. Pages

| Route | Page |
|---|---|
| `/` | Home — hero, highlights, programs, method, gallery, testimonials, map |
| `/about` | Story, mission & vision, CEO message, why choose us |
| `/courses` | Academic classes + professional courses, detailed course sections, FAQs |
| `/admissions` | Process, documents, indicative fees, admission form, FAQs |
| `/portal` | Student portal login (links to `nextechsms.duckdns.org`) |
| `/contact` | Contact cards, Google Map, message form, WhatsApp |

Header links and footer links all work, including deep links such as `/courses#web-development` and
`/admissions?course=Web%20Development#inquiry` (the form pre-selects the course).

---

## 4. Edit content

All key business data lives in two files:

### `src/data/site.js`
- phone, WhatsApp, student-portal URL, address, hours
- Google Maps embed / directions links
- CEO name and designer credit
- navigation labels

### `src/data/courses.js`
- academic programs (9th, 10th, 1st Year, 2nd Year)
- professional courses (duration, schedule, modules)
- fee table, required documents, admission steps
- FAQs and placeholder testimonials

Design tokens (colours, fonts, radii, shadows) are at the top of `src/styles.css`.

---

## 5. Important placeholders — review before publishing

This website was built from the brand brief and public details supplied. Several operational details
are **indicative placeholders** and should be confirmed by the academy:

- **Fee structure** — marked “Indicative” in the UI; replace in `feeStructure`.
- **Course durations / schedules** — marked as confirmed at admission; edit in `professionalCourses`.
- **Office hours** (Mon–Sat, 4–8 PM) — edit in `SITE.hours`.
- **Testimonials** — illustrative, labelled as placeholders on the page; replace with real, verified
  reviews when available.
- **Owner message** — draft copy written in the requested voice of Khizer Feroze; please have it
  approved/edited before launch.
- The Google Map embed points to **Al Syed Heights, Ghouri Town Phase 5**. If the pin needs to be
  exact, replace the `q=` location in `SITE.mapEmbed` / `SITE.mapLink`.

---

## 6. Brand assets (logo)

The academy’s official logo is now used across the site:

| File in `public/assets/img/` | Where it is used |
|---|---|
| `logo-mark-192.png` / `logo-mark-light-192.png` | Header crest, About page CEO card, portal login card (light variant = cream compass for dark backgrounds). The full-size `logo-mark*.png` masters stay in the folder as sources. |
| `logo-wordmark.png` / `logo-wordmark-light.png` | Kept for social/print use; the site itself now sets “NEXTECH / Academy · Islamabad” in type beside the SVG crest |
| `logo-full.png` / `logo-full-light.png` | Full vertical lockup (JSON-LD `logo`, Open Graph) |
| `favicon.ico`, `favicon-32.png`, `favicon-64.png`, `favicon-192.png` | Browser tab icon (navy tile + orange mark) |
| `apple-touch-icon.png` | iOS home-screen icon |

All variants were generated from the original logo artwork, at 4× resolution with a transparent
background. To change the logo later, replace those PNGs with the same filenames and keep the same
proportions.

The **program cards** (academic + professional) use a cursor-following gold spotlight border and
soft glow, matching the supplied reference video. Styles live under “Card spotlight” in
`src/styles.css`; the pointer tracking is in `src/components/ProgramCards.jsx`. The effect is
hover-only and switches off on touch devices.

---

## 7. Photos / imagery

Real campus imagery is now part of the site:

| File in `public/assets/img/` | Where it appears |
|---|---|
| `campus-classroom-1400.jpg` (1400×875) + `campus-classroom-800.jpg` | Home intro block and About “Our story” (real students solving a maths problem on the whiteboard) |
| `hero-classroom-900.jpg` / `hero-classroom-640.jpg` | Home hero backdrop, served responsively by width |
| `admission-poster-2026.jpg` (560×840) | Admissions page — framed “Admission campaign” poster for Class 9 |
| `learn-grow-succeed.jpg`, `poster-*.jpg`, `course-*-real.jpg` | Compressed JPEGs replacing the old multi-megabyte PNGs (same artwork) |
| `og-nextech.jpg` (1200×630) | WhatsApp / Facebook / Twitter link preview image |

The rest of the site still uses the lightweight **vector artwork** (science lab, web development,
graphic design, shorthand, portal, gold arches) because no real photos of those spaces were
available. Mixing one real photo with illustrations is intentional: the photo proves the campus,
the artwork keeps the pages fast and consistent.

To add more real photos later:

1. Put the photo in `public/assets/img/` (JPG/WebP, ideally 1200–1600 px wide, compressed).
2. Either replace `campus-classroom-1400.jpg` with the same filename, or send it over to be placed in the
   right section (lab, computer lab, teachers, building, event photos).
3. Photos sit inside engraved paper frames with sharp 2px corners, and a sepia "albumen print"
   treatment is applied in CSS — keep that if you swap the file.

---

## 8. Forms

The forms are front-end only, intentionally:

- They validate the input in the browser.
- On submit, they open **WhatsApp** with a pre-filled message to `0313-1534876`.
- A visible success panel includes a fallback WhatsApp link and the phone number.
- No data is stored on the website (stated under each form).

To connect a real back end later (email, database, CRM), replace the submit handler in
`src/components/InquiryForm.jsx`.

---

## 9. Project structure

```
index.html                 SEO meta, fonts, JSON-LD
START-WEBSITE.bat          double-click launcher
package.json / vite.config.js
public/
  assets/img/              logo, favicon, icons sprite, artwork
  robots.txt / sitemap.xml / _redirects
src/
  main.jsx                 React entry
  App.jsx                  router + layout + 404
  styles.css               complete design system
  components/              Header, Footer, PageHero, forms, cards, etc.
  pages/                   Home, About, Courses, Admissions, Portal, Contact
  data/                    site + course content
```

Tech: React 19, React Router 7, Vite 8. Type is self-hosted (no Google Fonts request):
Bodoni Moda (display), Spectral (text), Pinyon Script (hand), Courier Prime (ledger) — WOFF2 files
in `public/fonts/`.

---

## 10. Notes

- Student Portal links to **https://nextechsms.duckdns.org** and opens in a new tab.
- Phone: **0313-1534876** (click-to-call on mobile).
- Address: **Al Syed Heights, Phase 5, Ghouri Town, Islamabad, 4400, Pakistan**.
- Footer credit: **Created by HAMZA FEROZE**.
- Animations respect `prefers-reduced-motion`.
- Built with accessibility basics: skip link, focus states, ARIA labels, keyboard-friendly menus and
  accordions.

---

## 11. Design system — "The Prospectus"

The site is deliberately built as an **antique printed prospectus**, not a modern dark dashboard.
Every screen should feel like a plate lifted from a 1920s academy catalogue and re-set for the web:
paper, iron-gall ink, copper foil, bottle-green board and wax.

### Palette (top of `src/styles.css`)

| Token | Value | Role |
|---|---|---|
| `--paper` | `#efe4cd` | page stock |
| `--paper-soft` | `#f6efdf` | cards, drawer, notes |
| `--paper-2` / `--paper-3` | `#e7d9bd` / `#dccbaa` | alternate bands, plate grounds |
| `--ink` … `--ink-4` | `#171208` → `#8c7f6c` | text hierarchy (never pure black) |
| `--copper` / `--copper-2` | `#8d4620` / `#a85a2b` | links, rules, numerals, emphasis |
| `--green` / `--green-2` | `#1a2820` / `#23362a` | dark bands (method, stories, footer) |
| `--seal` | `#8c2f24` | wax seals only |
| `--rule` / `--rule-soft` | 22% / 13% ink | hairlines; never grey |

### Type

- **Bodoni Moda** — headlines and numerals; tight (`line-height: 1.02–1.12`), often with one
  italic *copper* word for emphasis.
- **Spectral** — running text, 1.65–1.8 line-height, measure kept near 60 characters.
- **Pinyon Script** — signatures, marginalia, the "est." hand.
- **Courier Prime** — plate numbers, folios, ledger data and small caps labels with wide tracking.

### Print details that carry the illusion

- 2px corners everywhere; no border radius above 2px.
- Double hairlines (`.rule`) and fleurons (`Diamond`) between blocks.
- Plate numbers on every section (`data-plate`, `::after`), hidden below 760px.
- `Orrery` (home), `WaxSeal` (CTA, admissions, method), `Rule`, `Diamond` live in
  `src/components/Ornaments.jsx`.
- Paper grain and vignette are baked into the fixed `.page-texture` layer; photos get a sepia
  "albumen print" filter.
- Motion is slow and mechanical (300–600ms, `--ease`) and is switched off under
  `prefers-reduced-motion`.

### Adding a section

Copy an existing `<section className="section" data-plate="…">`, keep `.container`, open with
`.head-block` or `.head-row`, and reuse `.eyebrow`, `.display`, `.section-lead`, `.btn`,
`.acard` / `.ccard`. Page-specific CSS goes in a commented block at the end of `styles.css` —
tokens and base type are never re-declared per page.
---

## 12. Security

Already configured — nothing extra to do before launch:

- **Headers** in `vercel.json` and `netlify.toml`: strict Content-Security-Policy (only own
  scripts, styles, fonts and images; Google Maps is the single allowed frame), HSTS,
  `X-Content-Type-Options`, `X-Frame-Options` + `frame-ancestors`, `Referrer-Policy`,
  `Cross-Origin-Opener-Policy`, a locked-down `Permissions-Policy`, and
  `X-Permitted-Cross-Domain-Policies: none`.
- **No secrets in the bundle** — the site has no API keys, tokens or back end. The forms only build a
  pre-filled `wa.me` link in the browser; nothing is stored or sent to a server.
- **No `dangerouslySetInnerHTML`, `eval` or `localStorage`** anywhere in `src`.
- All outbound links use `rel="noopener noreferrer"`; every external URL is `https://`.
- `npm audit` → **0 vulnerabilities** (48 packages).
- Production builds contain **no source maps**.

> Headers only apply when the **project root** is deployed (Vercel/Netlify build). If you upload or
> drag-and-drop the `dist` folder, the host never sees `vercel.json` — add the headers in the
> dashboard instead (Vercel: Project → Settings → Headers).

If you later add analytics, a chat widget, an embedded video or a real form back end, update the CSP
(`script-src`, `connect-src`, `frame-src`) in the same commit — otherwise the browser will block it.
