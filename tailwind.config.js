/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rmono: ["Roboto-Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
