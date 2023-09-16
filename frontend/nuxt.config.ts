// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  runtimeConfig: {
    public: {
       strapi: {
         url: 'http://localhost:1337' // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
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
