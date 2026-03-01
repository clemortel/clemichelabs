# ClemicheLabs – Portfolio Website

> Nuxt 3 SSG site with Firebase Hosting + client-side Firestore contact form.

---

## Tech Stack

**Nuxt 3 / Vue 3 / TypeScript / Tailwind CSS / Firebase (Hosting, Firestore)**

Modules: `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode`, `@nuxtjs/google-fonts`, `@nuxt/image`, `@nuxt/icon`, `@vueuse/nuxt`, `@nuxtjs/sitemap`

---

## Architecture

```
clemichelabs/
├── nuxt.config.ts                 # Modules, SEO head, color-mode, google-fonts
├── tailwind.config.ts             # Design tokens
├── app.vue                        # Root layout
├── pages/
│   ├── index.vue                  # All 7 sections composed + JSON-LD
│   └── legal.vue                  # Legal page
├── components/
│   ├── NavBar.vue                 # Sticky nav, scroll links, theme toggle, mobile menu
│   ├── SiteFooter.vue
│   ├── NeonButton.vue             # CTA with glow hover
│   ├── SectionWrapper.vue         # Section container (title, subtitle, slot)
│   ├── GradientBackground.vue     # Radial gradient bg
│   ├── MotionFadeUp.vue           # CSS fade-up animation on scroll (SSR-safe)
│   ├── sections/                  # Hero, Services, Portfolio, About, Process, Testimonials, Contact
│   └── cards/                     # ServiceCard, ProjectCard, ProcessStepCard, TestimonialCard
├── composables/
│   ├── useScrollSpy.ts            # IntersectionObserver for active section
│   └── useContactForm.ts          # Form state + client-side Firestore write
├── plugins/
│   └── firebase.client.ts         # Firebase client SDK init (client-only)
├── data/
│   └── content.ts                 # All marketing copy
├── types/
│   └── content.ts                 # TypeScript interfaces
├── assets/css/
│   └── main.css                   # Base styles
└── public/
    ├── favicon.png
    ├── robots.txt
    └── images/
```

### Data Flow

```
UI (Vue component) → composable → Firebase client SDK → Firestore
```

---

## Design System

| Token | Tailwind class | Value |
|-------|---------------|-------|
| Primary | `text-primary`, `bg-primary` | `#00f2ff` |
| Background Dark | `bg-bg-dark` | `#0f2223` |
| Background Light | `bg-bg-light` | `#f5f8f8` |
| Card Dark | `bg-card-dark` | `#162e2f` |
| Text Muted | `text-text-muted` | `#8ba8a9` |
| Font | `font-sans` | Space Grotesk |
| Radii | `rounded-sm/md/lg` | 8/16/32px |
| Glow | `shadow-neon` | cyan box-shadow |

Always use Tailwind design tokens from `tailwind.config.ts`. Never hardcode colors.

---

## Code Rules

- Explicit types on all variables, parameters, and return types
- Single quotes, no semicolons (handled by linter)
- All marketing copy in `data/content.ts` (never inline strings)
- Responsive via Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Keep files ~200 lines; extract components when larger
- Use `@nuxtjs/color-mode` for dark/light — never manual class toggling
- Animations use `MotionFadeUp` component (CSS transitions + IntersectionObserver, SSR-safe)
- Components use `pathPrefix: false` — no directory prefix needed (e.g. `<HeroSection>` not `<SectionsHeroSection>`)

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
