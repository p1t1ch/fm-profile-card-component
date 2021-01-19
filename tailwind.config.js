const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: 'hsl(185, 75%, 39%)',
          DEFAULT: 'hsl(228, 23%, 23%)',
          dark: 'hsl(228, 10%, 47%)',
        },
        neutral: 'hsl(228, 9%, 92%)',
      },
      fontSize: {
        xs: '.625rem',
      },
      maxWidth: {
        sm: '21.875rem',
      },
      borderWidth: {
        5: '5px',
      },
      padding: {
        18: '4.5rem',
      },
      translate: {
        'circle-x': '-103%',
        'circle-y': '-89%',
      },
      letterSpacing: {
        widest: '.15em',
      },
    },
  },
  variants: {
    extend: {},
  },
}
