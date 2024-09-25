// tailwind.config.js
module.exports = {
  content: ["./**/*.html", "./styles.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'Helvetica', 'Arial', 'sans-serif'],
      },
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
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-150%)' },
          '50%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flip: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        walk: 'walk 15s linear infinite',
        bounce: 'bounce 2s ease-in-out infinite',
        flip: 'flip 15s linear infinite',
      },
    },
  },
  plugins: [],
};
