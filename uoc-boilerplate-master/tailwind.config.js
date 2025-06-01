/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary':'#CADBC5',
        'strong-green':'#4B534B',
        'strong-green-hoover': '#404740',
        'light-grey':'#CED4DA',
        'font-grey':'#303638'
      },
      gap: {
        'rem3':'3rem', 
       },
       maxWidth: {
        'md-460':'460px', 
      },
      fontFamily: {
        archivoBlack:['"Archivo Black"', 'sans-serif'],
      },
      fontSize: {
        '3xxl':'2rem',
        '5xxl':'2.8rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ]
}
