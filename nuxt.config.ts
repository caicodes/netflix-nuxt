import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  // modules: ["@nuxtjs/tailwindcss"], // no customization version
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
});
