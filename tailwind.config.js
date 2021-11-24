module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#ccc',
          DEFAULT: '#ccc',
          dark: '#ccc',
        },
        red: {
          light: '#ccc',
          DEFAULT: '#ccc',
          dark: '#ccc',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
