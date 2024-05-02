// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
    }
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt',],
})