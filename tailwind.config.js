/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '2.5xl': '20px'
      },
      fontFamily:{
        'poppins': 'poppins'
      },
      height:{
        22: '85px'
      },
      colors:{
        primary:'#f00004',
        secondary:'#5a617b',
        tertiary:'#030f31',
        online:'#acc225',
        popupText:'#b09899'
      },
      spacing: {
        18: '72px'
      }
    },
  },
  plugins: [],
}