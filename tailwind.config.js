/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['templates/**/*.twig'],
  theme: {
    extend: {
      backgroundImage: {
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // styled: false, // include daisyUI colors and design decisions for all components
  },

}

