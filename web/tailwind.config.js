/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        DEFAULT: '#4F5B5A',
        50: '#ABB6B5',
        100: '#A0ADAC',
        200: '#8B9A99',
        300: '#758785',
        400: '#627170',
        500: '#4F5B5A',
        600: '#353D3C',
        700: '#1B1F1F',
        800: '#010101',
        900: '#000000',
        950: '#000000'
      },
      secondary: {
        DEFAULT: '#A2BDBB',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#EAF0EF',
        300: '#D2DFDE',
        400: '#BACECC',
        500: '#A2BDBB',
        600: '#81A6A3',
        700: '#638C89',
        800: '#4C6B69',
        900: '#354A48',
        950: '#293A38'
      },
      tertiary: {
        DEFAULT: '#BCA498',
        50: '#FFFFFF',
        100: '#FCFBFB',
        200: '#ECE6E2',
        300: '#DCD0C9',
        400: '#CCBAB1',
        500: '#BCA498',
        600: '#A68676',
        700: '#8A6A5A',
        800: '#685044',
        900: '#46362E',
        950: '#352923'
      },
      grey: {
        DEFAULT: '#93A6B1',
        50: '#FEFEFE',
        100: '#F2F4F5',
        200: '#DAE1E4',
        300: '#C2CDD3',
        400: '#ABBAC2',
        500: '#93A6B1',
        600: '#728B99',
        700: '#596E7B',
        800: '#41515A',
        900: '#2A343A',
        950: '#1E252A'
      },
    },
    extend: {},
  },
  plugins: [],
}
