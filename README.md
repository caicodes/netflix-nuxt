# Nuxt 3 Minimal Starter

hbo clone site... 

daisyui



Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

***Don't need color modes for HBO Vue*** so, put this bit in the blog...

##  Nuxt Color Mode Features
-   Nuxt 3 and Nuxt Bridge support
-   Add `.${color}-mode` class to `<html>` for easy CSS theming
-   Force a page to a specific color mode (perfect for incremental development)
-   Works with client-side and universal rendering
-   Auto detect system color-mode
-   Sync dark mode across tabs and windows 🔄
-   Supports IE9+ 👴

oooohhhh... sounds nice... 😎


Ok, color mode is in but not here, this is HBO, only one mode... dark! so, stripped it out...

Daisy is in and now... this is next


```

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

```