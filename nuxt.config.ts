import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/ac-icon.svg?v=2" }],
    },
  },
  modules: ["@nuxt/content"],
  css: ["@/styles/tailwind.css"],
  // modules: ["@nuxtjs/tailwindcss"], // no customization version
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    title: "NETFLIX Nuxt3 - a Cai Toy clone...",
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
