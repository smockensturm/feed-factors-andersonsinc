/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "templates/**/*.{html,twig}",
  ],
  theme: {
    extend: {
      colors: {
        "ff-blue": "#011A48",
        "ff-btn-blue": "#2B367A",
        "ff-yellow": "#DFC99F"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

