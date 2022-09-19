const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,tsx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./pages/**/*.{md,mdx,tsx}",
    "./theme.config.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#246BFD",
        custom: {
          blue: "#246BFD",
          black: "#121214",
          navy: "#181A20",
          1: "#121214",
          2: "#181A20",
          3: "#1C1E24",
        },
        webRgbColors: {
          1: "rgba(24, 24, 27, 0.8)",
          2: "rgba(75, 85, 99, 0.1)",
          3: "rgba(71, 85, 105, 0.2)",
          4: "rgba(51, 65, 85, 0.2)",
          5: "rgba(24, 24, 28, 0.6)",
          6: "rgba(51, 65, 85, 0.3)",
          7: "rgba(71, 85, 105, 0.1)",
          8: "rgba(24, 26, 32, 0.9)",
          9: "rgba(24, 26, 32, 0.6);",
        },
      },
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
        "toast-in": "toast-in-right .7s",
        roundtime: "roundtime calc(4 * 1s) linear forwards",
      },
      keyframes: {
        "toast-in-right": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        roundtime: {
          to: {
            transform: "scaleX(0)",
          },
        },
      },
      screens: {
        mob: "390px",
        tablet: "768px",
        laptop: "1024px",
        hdReady: "1280px",
        hdPlus: "1600px",
        fullHd: "1920px",
      },
      transitionTimingFunction: {
        loading: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  darkMode: "class",
};
