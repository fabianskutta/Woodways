// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/strapi'],
  runtimeConfig: {
    public: {
       strapi: {
         url: 'https://cms.woodways.ms/'
       },
    }
 }, 
  css: [
    '@/assets/css/main.scss',
  ],
  plugins: [
    './plugins/markdown.ts',
  ],
})
