/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/.vue'],
  theme: {
    extend: {
      fontFamily: {
        'nunitos': ['Nunito Sans', 'sans-serif',],
      },
    },
  },
  plugins: [         
    require('tailwindcss'),     
    require('autoprefixer'),     
  ]}
