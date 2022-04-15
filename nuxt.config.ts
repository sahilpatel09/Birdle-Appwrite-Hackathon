import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  
  privateRuntimeConfig: {
    API_BASE_URL: process.env.APPWRITE_URL
},

  css: ["~/assets/css/tail.css"],
  
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
