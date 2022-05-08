import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    baseSiteURL: "https://medium.termshel.com",
    public: {
      apiBase: process.env.NUXT_APPWRITE_URL,
      siteBase: process.env.NUXT_SITE_BASE,
      apiRoot: process.env.NUXT_APPWRITE_API,
      birdle: process.env.NUXT_APPWRITE_BIRDLE,
    },
  },
  css: ["~/assets/css/tail.css"],
   meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
