# ClemicheLabs – Portfolio Website

> Freelance site of Clément Balanger (Flutter tech lead, fixed-price missions).
> Nuxt 3 SSG on Firebase Hosting + client-side Firestore contact form.

---

## Tech Stack

**Nuxt 3 / Vue 3 / TypeScript / Tailwind CSS / Firebase (Hosting, Firestore)**

Modules: `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode`, `@nuxt/image`, `@nuxt/icon`, `@vueuse/nuxt`, `@nuxtjs/sitemap`

---

## Architecture

```
clemichelabs/
├── nuxt.config.ts                 # Modules, SEO head (FR), color-mode, fonts
├── tailwind.config.ts             # Design tokens
├── app.vue                        # Root layout
├── pages/
│   ├── index.vue                  # Home: sections + JSON-LD (Person, offers)
│   ├── flutter-a-jour.vue         # Store-update offer (OfferLanding)
│   ├── securite.vue               # Supabase/Firebase offer (OfferLanding)
│   └── legal|privacy.vue          # Thin wrappers on LegalDocument
├── components/
│   ├── PageShell.vue              # Header + main + footer
│   ├── SiteHeader.vue             # Name, anchor nav, theme toggle
│   ├── SiteFooter.vue
│   ├── SectionBlock.vue           # Section with title + slot
│   ├── OfferLanding.vue           # Single-offer landing page layout
│   ├── LegalDocument.vue          # Shared legal page layout
│   ├── sections/                  # Hero, Offers, Work, Method, About, Faq, Contact
│   └── cards/                     # OfferRow, WorkEntry
├── composables/
│   └── useContactForm.ts          # Form state + client-side Firestore write
├── plugins/
│   └── firebase.client.ts         # Firebase client SDK init (client-only)
├── data/
│   ├── content.ts                 # All home copy (French)
│   ├── landings.ts                # Copy of the offer landing pages
│   └── legal.ts                   # Legal notice and privacy
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

Plain developer site, text-first: near-white background, system sans font,
one accent, no gradients, glows, glass cards, icon grids, numbered section
labels or web fonts. It must not look AI-generated or like a template.

| Token | Tailwind class | Light / Dark |
|-------|---------------|-------|
| Paper | `bg-paper` / `dark:bg-paper-dark` | `#fcfcfb` / `#121212` |
| Surface | `bg-surface` / `dark:bg-surface-dark` | `#f2f2ef` / `#1c1c1b` |
| Ink | `text-ink` / `dark:text-ink-dark` | `#161616` / `#ececea` |
| Muted | `text-soft` (component class) | `#5c5c57` / `#a3a39d` |
| Rule | `border-rule` / `dark:border-rule-dark` | `#e2e2de` / `#2a2a28` |
| Accent | `text-accent` / `dark:text-accent-dark` | `#b33a0b` / `#f08a5d` |
| Font | `font-sans` | System UI stack (no web fonts) |

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
- Never name the employer, its app, its user figures or its logo until
  the contract amendment allows it ("tech lead mobile dans une startup")
- Offers are B2B only; security work is a configuration review, never
  sold as a penetration test or a guarantee
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

All copy lives in `data/content.ts` (home), `data/landings.ts` (offer
pages) and `data/legal.ts`. Offers and prices must match Jarvis
`Volets/Freelance.md`. Removed URLs are redirected in `firebase.json`.
