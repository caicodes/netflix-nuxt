/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "hbo-primary": "var(--primary)",
        "hbo-primary-focus": "var(--primary-focus)",
        "hbo-primary-content": "var(--primary-content)",
        "hbo-secondary": "var(--secondary)",
        "hbo-secondary-focus": "var(--secondary-focus)",
        "hbo-secondary-content": "var(--secondary-content)",
        "hbo-accent": "var(--accent)",
        "hbo-accent-content": "var(--accent-content)",
        "hbo-neutral": "var(--neutral)",
        "hbo-base-content": "var(--base-content)",
        "hbo-base-100": "var(--base-100)",
        "hbo-base-200": "var(--base-200)",
        "hbo-base-300": "var(--base-300)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        hbo: {
          primary: "#9e86ff",
          "primary-focus": "#a991f7",
          "primary-content": "#ffffff",
          secondary: "#b535f6",
          "secondary-focus": "#c800ff",
          "secondary-content": "#ffffff",
          accent: "#7e22ce",
          "accent-focus": "#7b2abf",
          "accent-content": "#ff00e5",
          neutral: "#480cb0",
          "base-content": "#ffffff",
          "base-100": "#030326",
          "base-300": "#0e0538",
        },
      },
    ],
  },
};
