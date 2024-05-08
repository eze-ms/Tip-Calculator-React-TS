/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        slabo: ['"Slabo 27px"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        colors: {
          customColor: '#text-[#13474b]',
        },
      },
    },
  },
  plugins: [],
};

