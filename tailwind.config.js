/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      almarai: ["Almarai", "sanx-serif"],
    },
    colors: {
    "words-green-light":"#63AD28",
    "word-green":"#34A853",
    "word-green-dark":"#2E842E",
    "word-gray-light-1":"#F2F0F0",
    "word-gray-light-2":"#DCDBDD",
    "word-gray-light-3":"#d6d6d6",
    "word-gray-dark-1":"#707070",
    "word-gray-dark-2":"#84818A",
    "word-gray-dark-3":"#47464A",
    "word-dark":"#202020",
    "word-yellow":"#FBBC04",
    "word-red":"#EA4335",
    "word-blue-light":"#4285F4",
    "word-blue-dark":"#1977F3",
    "word-white":"#fff"
    },
  },
  plugins: [],
}

