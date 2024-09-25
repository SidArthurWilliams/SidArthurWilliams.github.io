// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'eerie-black': {
          DEFAULT: '#1B1B1B',
          '900': '#0D0D0D',
        },
        'coquelicot': {
          '400': '#FF6F59',
          '500': '#FF5733',
        },
        'beige': {
          DEFAULT: '#F5F5DC',
          '500': '#F0E68C',
        },
      },
    },
  },
  plugins: [],
};
