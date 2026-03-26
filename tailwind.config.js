/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD",
        secondary: "#A020F0",
        accent: "#FF69B4",
      },
    },
  },
  plugins: [],
}