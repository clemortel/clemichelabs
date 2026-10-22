# ClemicheLabs – Portfolio Website

> Freelance site of Clément Balanger (product engineer, Flutter + AI).
> Nuxt 3 SSG on Firebase Hosting + client-side Firestore contact form.

---

## Tech Stack

**Nuxt 3 / Vue 3 / TypeScript / Tailwind CSS / Firebase (Hosting, Firestore)**

Modules: `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode`, `@nuxtjs/google-fonts`, `@nuxt/image`, `@nuxt/icon`, `@vueuse/nuxt`, `@nuxtjs/sitemap`

---

## Architecture

```
clemichelabs/
├── nuxt.config.ts                 # Modules, SEO head (FR), color-mode, fonts
├── tailwind.config.ts             # Design tokens
├── app.vue                        # Root layout
├── pages/
│   ├── index.vue                  # Home: sections + JSON-LD (Person, offers)
│   ├── legal|terms|privacy|refunds.vue  # Thin wrappers on LegalDocument
│   ├── pricing.vue                # Paddle digital products
│   └── solo-cto-os.vue
├── components/
│   ├── PageShell.vue              # Header + main + footer
│   ├── SiteHeader.vue             # Name, anchor nav, theme toggle
│   ├── SiteFooter.vue
│   ├── SectionBlock.vue           # "01 — Label" column + serif title + slot
│   ├── LegalDocument.vue          # Shared legal page layout
│   ├── sections/                  # Hero, Offers, Work, Method, About, Faq, Contact
│   └── cards/                     # OfferRow, WorkEntry
├── composables/
│   └── useContactForm.ts          # Form state + client-side Firestore write
├── plugins/
│   └── firebase.client.ts         # Firebase client SDK init (client-only)
├── data/
│   ├── content.ts                 # All home copy (French)
│   ├── legal.ts                   # Legal, terms, privacy, refunds
│   └── products.ts                # Paddle products
├── types/
│   └── content.ts                 # TypeScript interfaces
├── assets/css/
│   └── main.css                   # Tailwind entry + base + component classes
└── public/
    ├── llms.txt                   # Plain summary for AI search engines
    ├── robots.txt
    └── images/
```

### Data Flow

```
UI (Vue component) → composable → Firebase client SDK → Firestore
```

---

## Design System

Editorial, text-first: paper background, ink text, one accent, no gradients,
glows, glass cards or icon grids. It must not look AI-generated.

| Token | Tailwind class | Light / Dark |
|-------|---------------|-------|
| Paper | `bg-paper` / `dark:bg-paper-dark` | `#f6f3ec` / `#141311` |
| Ink | `text-ink` / `dark:text-ink-dark` | `#1c1b18` / `#ece8df` |
| Muted | `text-soft` (component class) | `#6b665c` / `#9d978b` |
| Rule | `border-rule` / `dark:border-rule-dark` | `#d9d2c3` / `#2e2b26` |
| Accent | `text-accent` / `dark:text-accent-dark` | `#b33a0b` / `#f08a5d` |
| Fonts | `font-serif` / `font-sans` / `font-mono` | Newsreader / IBM Plex Sans / IBM Plex Mono |

Component classes in `main.css`: `.link`, `.label`, `.button-primary`,
`.field`, `.text-soft`. Always use tokens; never hardcode colors.

---

## Code Rules

- Explicit types on all variables, parameters, and return types
- Single quotes, no semicolons (handled by linter)
- All copy in `data/*.ts` (never inline strings); French typography uses
  `\u00A0` before `: ; ? ! € %` and inside numbers
- Responsive via Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Keep files ~200 lines; extract components when larger
- Use `@nuxtjs/color-mode` for dark/light — never manual class toggling
- No scroll animations; native `<details>` for the FAQ
- Never name the employer (mobility startup) or show its logo until the
  contract amendment allows it
- Components use `pathPrefix: false` — no directory prefix needed

---

## Development Commands

```bash
# Dependencies
npm install

# Dev server
npm run dev

# Build for production (SSG)
npm run generate

# Deploy
npm run deploy
# or: npx nuxi generate && firebase deploy --only hosting
```

---

## Firebase

- **Project:** clemichelabs
- **Hosting:** `.output/public` (static files from `nuxt generate`)
- **Firestore:** `contact_submissions` collection (client-side write via Firebase JS SDK)
- **Rules:** `firestore.rules` — validates name/email/message fields
- **Config:** in `plugins/firebase.client.ts` (client-only plugin)

---

## Content Editing

All site copy lives in `data/content.ts`. Edit there to update:
- Taglines, stats, services, projects, process steps, testimonials, founder bio
