const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 45px 60px -15px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        gray: colors.zinc,
        "raster-red": "#FF2F66",
      },
    },
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }

      ...defaultTheme.screens,
      // Default breakpoints

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "4xl": "2180px",
      // => @media (min-width: 2180px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "max-xs": { max: "399px" },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
