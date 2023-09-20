/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono',],
      },
    },
    colors: {
      'primary' : '#5b0dbc',
      'secondary': '#8e54e1',
      'tertiary': '#97f91d',
      'accent': '#f9f90c',
      'neutral': '#111011',
      'surface': '#dad9d5',
      'error': '#fe333b',
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
