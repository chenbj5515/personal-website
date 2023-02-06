/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "xs": "12px",
      "sm": "13px",
      "base": "18px",
      "lg": "20px",
      "xl": "24px",
      "2xl": "28px",
      "32": "32px",
      "3xl": "2rem;"
    },
    leading: {
      "12": "48px",
      "16": "64px"
    },
    letterSpacing: {
      normal: "1px",
      wide: "2px"
    },
    colors: {
      theme: "#6a57fa",
      black: "#1a1a1a",
      dark: "#212121",
      blue: "#1e07f0",
      white: "white",
      gray: "rgb(120, 120, 120)",
      grey: "#9ca3af",
    },
    extend: {
      boxShadow: {
        'crescent': 'inset 8px -4px 0px 0px #fff000',
        'full-moon': 'inset 15px -4px 0px 15px #fff000',
        'card': '0px 8px 16px 8px rgb(0 0 0 / 3%)',
        'fancy': '0px 0px 30px 1px rgba(0, 255, 117, 0.30)',
        'dark-shadow': 'rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;'
      },
      backgroundImage: {
        'dark-border': 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)'
      }
    },
  },
  plugins: [],
}
