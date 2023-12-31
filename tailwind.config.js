/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            bgblack: '#0e0e0e',
            textblack: '#0e0e0e',
            bgwhite: '#e8e5de',
            textwhite: '#e8e5de',
        }

    },
    theme: {
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    }
  },
  plugins: [],
}