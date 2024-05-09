/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        tem : 'rgba(11,3,37,0.4)'
      }
    },
  },
  plugins: [],
}

