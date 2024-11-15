// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // colorMode: {
  //   preference: "light",
  // },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  content:{
    highlight:{
      theme: 'nord',
      preload:[
        'ts',
        'js',
        'html',
        'css',
        'json',
        'vue',
        'bash'
      ]
    }
  }
});