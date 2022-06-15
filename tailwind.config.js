/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/.vue',
    './node_modules/tw-elements/dist/js/**/*.js',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunitos': ['"Nunito Sans"', 'sans-serif',],
      },
    },
  },
  plugins: [         
    require('tailwindcss'),     
    require('autoprefixer'),  
    require('tw-elements/dist/plugin')   
  ]}
