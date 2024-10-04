/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "dark-black": "#020204",
        "dark-gray": "#1e1e23",
        "soft-white": "#f8f8fa",
      },
    },
  },
  plugins: [],
};
