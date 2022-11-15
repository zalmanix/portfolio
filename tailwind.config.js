/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        "primary-yellow": "#A38C49",
        "primary-blue": "#4960A3",
        background: {
          50: "#4B484D",
          100: "#413F3B",
          200: "#0D1113",
          300: "#13181C",
        },
        "neutral-grayscale": {
          100: "#3E3D3A",
          200: "#3A3E3D",
          300: "#3D3A3E",
        },
      },
    },
  },
  plugins: [],
};
