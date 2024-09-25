// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      // Custom Fonts
      fontFamily: {
        sans: ['"Poppins"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      
      // Custom Colors
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
      
      // Custom Keyframes for Animations
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-150%)' },
          '50%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-10px)' },
        },
        flip: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      
      // Custom Animations
      animation: {
        walk: 'walk 12s linear infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        flip: 'flip 12s linear infinite',
      },
    },
  },
  plugins: [],
};
