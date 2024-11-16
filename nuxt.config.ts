// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // colorMode: {
  //   preference: "light",
  // },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxtjs/apollo", "@nuxtjs/i18n"],
  css: ["~/assets/css/index.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "en", language: "en-US" },
      { code: "es", language: "es-ES" },
    ],
    defaultLocale: "en",
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
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
