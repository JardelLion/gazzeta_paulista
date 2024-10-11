/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend:
    
    {
      backgroundImage: {
        'hero-pattern': "url('../img/background_header.webp')"
      },

      fontFamily: {
        'span': ['Paytone One'],
        'span-logo': ['Limelight'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ["Open Sans", "Open Sans Regular"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}