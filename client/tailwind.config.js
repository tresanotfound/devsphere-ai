/** @type {import('tailwindcss').Config} */

export default {

  content: [

    './index.html',

    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {

    extend: {

      colors: {

        primary: '#b9ff66',

        dark: '#0f172a',
      },
    },
  },

  plugins: [],
};