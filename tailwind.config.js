/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        netflix:{
          red:'rgb(169, 10, 18)',
          blue:'#1D1930',
          bluelight:'#1A2144'
        }
      }
    },
  },
  plugins: [],
}

