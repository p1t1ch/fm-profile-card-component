const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(185, 75%, 39%)',
        DEFAULT: 'hsl(229, 23%, 23%)',
        dark: 'hsl(227, 10%, 46%)',
      },
      neutral: 'hsl(0, 0%, 59%)',
    },
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
}
