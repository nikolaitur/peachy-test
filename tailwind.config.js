const path = require("path");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        adorn: ['"Adorn"', "sans-serif"],
        futura: ['"FuturaPT"', "sans-serif"],
      },
      colors: {
        linen: "#FDF5F4",
        cinderella: "#FDE0DC",
        "mine-shaft": "#242323",
        candlelight: "#FFD11F",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
