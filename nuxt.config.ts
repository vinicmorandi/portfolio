// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'pt', language: 'pt-BR' }
    ],
    defaultLocale: 'en',
  },
})