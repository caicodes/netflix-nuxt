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
          "primary-content": "#ffffff",
          secondary: "#c62828",
          "secondary-content": "#ffffff",
          accent: "#c62828",
          "accent-content": "#ffffff",
          neutral: "#480cb0",
          "base-content": "#ffffff",
          "base-100": "#111111",
          "base-300": "#222222",
        },
      },
    ],
  },
};
