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
        "ff-yellow": "#DFC99F",
        "ff-grey": "#686868"
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

