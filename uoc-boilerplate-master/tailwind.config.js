/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary:  '#CADBC5',
        masterBrand:  '#4B534B'
      }
    },
    container: {
      type: 'inline-size',
    },
  },
  plugins: []
}
