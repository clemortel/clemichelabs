export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
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
      title: 'Clément Balanger — Tech lead Flutter freelance, Paris',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Tech lead Flutter freelance à Paris : mise à jour des apps pour les stores (Android 16, Xcode 26), audit, sécurisation Supabase ou Firebase, fonctionnalités IA. Au forfait, pour les professionnels.',
        },
        { name: 'author', content: 'Clément Balanger' },
        { name: 'theme-color', content: '#fcfcfb' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://clemichelabs.com' },
        {
          property: 'og:title',
          content: 'Clément Balanger — Tech lead Flutter freelance',
        },
        {
          property: 'og:description',
          content:
            'Mise à jour des apps Flutter pour les stores, audit, sécurisation Supabase ou Firebase, fonctionnalités IA. Au forfait.',
        },
        {
          property: 'og:image',
          content: 'https://clemichelabs.com/images/photo_visage.jpg',
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'Clément Balanger — Tech lead Flutter freelance',
        },
        {
          name: 'twitter:description',
          content:
            'Mise à jour des apps Flutter pour les stores, audit, sécurisation Supabase ou Firebase, fonctionnalités IA. Au forfait.',
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
