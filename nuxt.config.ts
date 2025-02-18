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
    '@nuxtjs/seo',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'pt', language: 'pt-BR' }
    ],
    defaultLocale: 'en',
  },
  site: {
    url: 'https://vinicmorandi.vercel.app/',
    name: 'Portfolio - Vinícius Morandi',
    description: "I'm Vinícius Morandi, a software developer that specializes in creating phenomenal digital experiences.",
  },
})