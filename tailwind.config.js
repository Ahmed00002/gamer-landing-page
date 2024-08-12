/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 66, 165)",
        secondary: "rgb(83, 76, 100)",
        footer: "rgb(11, 2, 35)",
        navText: "rgb(60, 53, 79)",
        navButton: "rgba(11, 2, 35, 0.1)",
        navShadow: "rgba(0, 0, 0, 0.05)",
        youTube: "rgb(246, 28, 13)",
        btnColor: "rgb(78, 197, 247)",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
