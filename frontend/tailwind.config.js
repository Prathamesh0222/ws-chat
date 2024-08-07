/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skeleton: '#000000', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

