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
        "netflix-primary": "var(--primary)",
        "netflix-primary-focus": "var(--primary-focus)",
        "netflix-primary-content": "var(--primary-content)",
        "netflix-secondary": "var(--secondary)",
        "netflix-secondary-focus": "var(--secondary-focus)",
        "netflix-secondary-content": "var(--secondary-content)",
        "netflix-accent": "var(--accent)",
        "netflix-accent-content": "var(--accent-content)",
        "netflix-neutral": "var(--neutral)",
        "netflix-base-content": "var(--base-content)",
        "netflix-base-100": "var(--base-100)",
        "netflix-base-200": "var(--base-200)",
        "netflix-base-300": "var(--base-300)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        netflix: {
          primary: "#e50914",
          secondary: "#db0510",
          accent: "#e50914",
          neutral: "#303030",
          "base-content": "#ffffff",
          "base-100": "#000000",
          "base-200": "#300305",
          "base-300": "#520509",
        },
      },
    ],
  },
};
