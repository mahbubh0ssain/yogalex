/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
