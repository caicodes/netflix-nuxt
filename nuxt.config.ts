import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: ["@/styles/tailwind.css"],
  // modules: ["@nuxtjs/tailwindcss"], // no customization version
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    title: "HBO Vue - a Cai Toy clone...",
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
