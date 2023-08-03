/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['templates/**/*.twig'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true, // include daisyUI colors and design decisions for all components
  },

}

