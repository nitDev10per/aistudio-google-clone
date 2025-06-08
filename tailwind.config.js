/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      windowC: "#181818",
      hoverC: "#414141",
      buttonC: "#87A9FF",
      textC: '#9E9E9E',
      cardC: '#1E1E1E',

    },
    borderRadius: {
      lgx: "1rem",
    },
    screens: {
      'max1020': { 'max': '1020px' },
      'max769': { 'max': '769px' },
      'max750': { 'max': '750px' },
      'max435': { 'max': '435px' },
    },
  },
  },
  plugins: [],
}

