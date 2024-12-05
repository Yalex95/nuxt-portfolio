console.log(process.env.API_KEY);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // colorMode: {
  //   preference: "light",
  // },
  app: {
    baseURL: "/", // Ensure consistency here
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxtjs/apollo",
    "@nuxtjs/i18n",
    "nuxt-swiper",
  ],
  css: ["~/assets/css/index.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "en", language: "en-US" },
      { code: "es", language: "es-ES" },
    ],
    // defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,

    apiKey: process.env.API_KEY,
    templateId: process.env.TEMPLATE_ID,
    serviceId: process.env.SERVICE_ID,
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "html", "css", "json", "vue", "bash"],
    },
  },
});
