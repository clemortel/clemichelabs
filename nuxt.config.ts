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

  site: {
    url: 'https://clemichelabs.com',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'ClemicheLabs - Micro-SaaS Studio & CTO-for-Hire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Paris-based micro-SaaS studio & fractional CTO. We build weird but profitable products. CTO-for-hire, rapid prototyping, AI systems.',
        },
        { name: 'author', content: 'Clement Balanger' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://clemichelabs.com' },
        {
          property: 'og:title',
          content: 'ClemicheLabs - Micro-SaaS Studio & CTO-for-Hire',
        },
        {
          property: 'og:description',
          content:
            'Paris-based micro-SaaS studio & fractional CTO. We build weird but profitable products.',
        },
        { property: 'og:image', content: 'https://clemichelabs.com/images/photo_visage.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'ClemicheLabs - Micro-SaaS Studio & CTO-for-Hire',
        },
        {
          name: 'twitter:description',
          content:
            'Paris-based micro-SaaS studio & fractional CTO. We build weird but profitable products.',
        },
        { name: 'twitter:image', content: 'https://clemichelabs.com/images/photo_visage.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 600, 700, 800],
    },
    display: 'swap',
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
