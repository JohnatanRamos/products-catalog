/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      minWidth: {
        '3': '300px'
      }
    },
  },
  plugins: [],
}

