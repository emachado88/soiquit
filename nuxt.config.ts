import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project page URL: https://emachado88.github.io/soiquit/
// Override at build time with NUXT_APP_BASE_URL when a custom domain lands
// (then base is '/'). The CI workflow sets it explicitly.
const baseURL = process.env.NUXT_APP_BASE_URL || '/soiquit/'

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/eslint'],
  // Clean component names regardless of subfolder (same convention as the app)
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'So I Quit — quit a habit, watch the savings grow',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'So I Quit counts every day, hour and minute since you quit — and turns what you used to spend into savings you can see. Free, offline-first, no account.',
        },
        { name: 'theme-color', content: '#1a6b5c' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'So I Quit' },
        {
          property: 'og:title',
          content: 'So I Quit — quit a habit, watch the savings grow',
        },
        {
          property: 'og:description',
          content:
            'Count every day, hour and minute since you quit — and watch your savings stack up. Free, offline-first, no account.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}icon.svg` }],
      script: [
        {
          // Pre-paint theme (FOUC guard). Keep STORAGE_KEY in sync with
          // app/composables/useThemeMode.ts.
          innerHTML:
            '(function(){try{var t=localStorage.getItem(\'theme\');var d=t===\'dark\'||(t===null&&matchMedia(\'(prefers-color-scheme: dark)\').matches);document.documentElement.classList.toggle(\'dark\',d)}catch(e){}})()',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      downloadURL: 'https://github.com/emachado88/so-i-quit/releases',
    },
  },
  compatibilityDate: '2026-08-10',
  // Stable output dir for the GitHub Pages workflow (landing/dist).
  nitro: {
    output: { publicDir: 'dist' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: { config: { stylistic: true } },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
    ],
  },
})
