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
      // --primary: #9e86ff;
      // --primary-focus: #a991f7;
      // --primary-content: #ffffff;
      // --secondary: #b535f6;
      // --secondary-focus: #c800ff;
      // --secondary-content: #ffffff;
      // --accent: #7e22ce;
      // --accent-focus: #7b2abf;
      // --accent-content: #ff00e5;
      // --neutral: "#480cb0;
      // --base-100: #030326;
      // --base-300: #0e0538;
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

//#030328

/*

HBO bg - #030328

Now... coming soon... using daisyui and tailwind to 
create the HBO theme... with like 5 variables!

module.exports = {
  //...
  daisyui: {
    themes: [
      {
        hbo: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
}
*/
