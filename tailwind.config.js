/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-primary': '#2C5F2D',
        'forest-dark': '#1B4332',
        'amber-light': '#D4A574',
        'nature-bg': '#F4F1EA',
        'nature-light': '#FDFBF7',
        'text-dark': '#1A1A1A',
        'text-medium': '#5A5A5A',
        'dark-bg': '#2A2A2A',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        featureMarquee: 'featureMarquee 4s linear infinite alternate',
        leafSway: 'leafSway 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1.2s ease forwards',
      },
      keyframes: {
        featureMarquee: {
          '0%': { transform: 'translateX(500px)' },
          '100%': { transform: 'translateX(-100px)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
