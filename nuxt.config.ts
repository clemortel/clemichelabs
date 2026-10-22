export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',

    '@nuxtjs/sitemap',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  site: {
    url: 'https://clemichelabs.com',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Clément Balanger — Ingénieur produit freelance, Flutter et IA, Paris',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Ingénieur produit et tech lead Flutter à Paris. Scan sécurité Supabase ou Firebase, audit prêt pour la production, fonctionnalités IA : au forfait, une mission à la fois.",
        },
        { name: 'author', content: 'Clément Balanger' },
        { name: 'theme-color', content: '#f6f3ec' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://clemichelabs.com' },
        {
          property: 'og:title',
          content: 'Clément Balanger — Ingénieur produit, Flutter et IA',
        },
        {
          property: 'og:description',
          content:
            'Des idées et des prototypes transformés en apps qui tournent en production. Au forfait, une mission à la fois.',
        },
        {
          property: 'og:image',
          content: 'https://clemichelabs.com/images/photo_visage.jpg',
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'Clément Balanger — Ingénieur produit, Flutter et IA',
        },
        {
          name: 'twitter:description',
          content:
            'Des idées et des prototypes transformés en apps qui tournent en production. Au forfait, une mission à la fois.',
        },
        {
          name: 'twitter:image',
          content: 'https://clemichelabs.com/images/photo_visage.jpg',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://clemichelabs.com' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  googleFonts: {
    families: {
      Newsreader: { wght: [400, 500], ital: [400] },
      'IBM Plex Sans': [400, 500, 600],
      'IBM Plex Mono': [400, 500],
    },
    display: 'swap',
    download: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  nitro: {
    preset: 'static',
  },

  typescript: {
    strict: true,
  },
})
