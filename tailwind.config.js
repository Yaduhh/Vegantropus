/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["poppins-regular", "sans-serif"],
        "poppins-medium": ["poppins-medium", "sans-serif"],
        "poppins-semibold": ["poppins-semibold", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
      },
      colors: {
        primary: "#1B1D1A",
        secondary: "#76E874",
        third: "#DCEBE1",
        accent: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
