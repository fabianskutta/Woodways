// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/strapi', 'nuxt-mapbox', '@vueuse/motion/nuxt', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
  strapi: {
    url: 'https://cms.woodways.ms',
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZmFiaWFuc2t1dHRhIiwiYSI6ImNsNDh5aTQ5MjAwZ3EzY3FuaTczMnlobmYifQ.KzPRrme77HKpUDSnXQjDWQ'
  },
  css: [
    '@/assets/css/main.scss',
  ],
  site: {
    url: 'https://woodways.ms',
  },
  plugins: [
    './plugins/markdown.ts',
  ]
})
