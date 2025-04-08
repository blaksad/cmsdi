/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#FBCFE8',
        pastelViolet: '#E9D5FF',
        pastelOrange: '#FED7AA',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Exemple d'animations subtiles
      keyframes: {
        fadeInDown: {
          '0%':   { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
