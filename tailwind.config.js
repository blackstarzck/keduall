/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freesentation: ['Freesentation', 'sans-serif'],
        concept: ['Myriad Variable Concept', 'sans-serif'],
      },
      colors: {
        primary: '#097FAD',
        secondary: '#F7C74F',
        text: '#333333',
        disabled: '#BFBFBF',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }
      addUtilities(newUtilities)
    },
    function({ addUtilities }) {
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
