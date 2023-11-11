/** @type {import('tailwindcss').Config} */
// import colors from 'tailwind/css/colors';
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./**/*.pug",
    // "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
    theme: {
      extend: {
        colors: {
          // "vtd-primary": colors.sky, // Light mode Datepicker color
          // "vtd-secondary": colors.gray, // Dark mode Datepicker color
        },
      }
    // extend: {},
  },
  // plugins: [],
}

