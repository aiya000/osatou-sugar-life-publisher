const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /**
     * Default colors.
     */
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.coolGray,
    red: colors.red,
    yellow: colors.amber,
    blue: colors.blue,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
