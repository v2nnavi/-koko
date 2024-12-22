/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ADD8E6', // soft sky blue
          DEFAULT: '#87CEEB', // medium sky blue
          dark: '#4682B4', // darker sky blue
        },
        secondary: {
          light: '#F0F8FF', // lightest hint of blue (almost white)
          DEFAULT: '#E0FFFF', // pale blue
          dark: '#B0E0E6', // light pastel blue
        },
        white: {
          DEFAULT: '#FFFFFF', // pure white
          soft: '#F8F9FA', // soft white
        },
      },
    },
  },
  plugins: [],
}