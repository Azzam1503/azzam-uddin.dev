/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        oswald: ['Oswald'],
        montserrat: ['Montserrat']
      },
      keyframes:{
        'open-menu' : {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
        animation:{
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      }
    },
  },
  plugins: [],
}