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
      Luckiest:['Luckiest Guy', "cursive"],
      ElMessiri:['El Messiri','ans-serif'],
    },
    colors: {
    "words-green-light":"#63AD28",
    "word-green":"#34A853",
    "word-green-1":"#379237",
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
    "word-blue-light-1":"#6DCFF6",
    "word-blue-light-2":"#A5E2FA",
    "word-blue-light-3":"#E7F6FC",
    "word-blue-dark":"#1977F3",
    "word-blue-dark-1":"#6055A2",
    "word-blue-dark-2":"#9B91C6",
    "word-white":"#fff",
    "word-pink-light":"#EC008C",
    "word-pink-dark":"#9F015E",
    "word-orange-dark":"#EAA421",
    "word-orange-light":"#EAC321",
    "word-sky-light":"#6DCFF6",
    "word-sky-dark":"#A5E2FA",
    },
  },
  plugins: [],
}

