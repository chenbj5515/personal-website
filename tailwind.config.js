/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      theme: "#6a57fa",
      black: "black",
      blue: "#1e07f0",
      white: "white",
      gray: "#4b5563",
      grey: "#9ca3af"
    },
    extend: {
      boxShadow: {
        'crescent': 'inset 8px -4px 0px 0px #fff000',
        'full-moon': 'inset 15px -4px 0px 15px #fff000',
        'card': '0px 8px 16px 8px rgb(0 0 0 / 3%)'
      }
    },
  },
  plugins: [],
}
