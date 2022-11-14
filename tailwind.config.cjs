/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1600px",
    },
    colors: {
      green: "#86aba6",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Source\\ Serif\\ Pro", "serif"],
    },
    extend: {
      height: {
        img: "612px",
      },
    },
  },
  plugins: [],
};
