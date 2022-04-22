import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    baseSiteURL: "https://medium.termshel.com",
    public: {
      apiBase: process.env.APPWRITE_URL,
      siteBase: process.env.SITE_BASE,
    },
  },
  css: ["~/assets/css/tail.css"],

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
