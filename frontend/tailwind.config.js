module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        darkgray: '#a9a9a9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
