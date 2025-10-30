/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f5f3',
          100: '#ede8e3',
          200: '#d9d0c7',
          300: '#c2b5a8',
          400: '#a89685',
          500: '#8b7a6b',
          600: '#7a6b5d',
          700: '#6b5d52',
          800: '#5a4e45',
          900: '#3B2F2F',
          950: '#2a1f1f',
        },
        brown: {
          50: '#f7f5f3',
          100: '#ede8e3',
          200: '#d9d0c7',
          300: '#c2b5a8',
          400: '#a89685',
          500: '#8b7a6b',
          600: '#7a6b5d',
          700: '#6b5d52',
          800: '#5a4e45',
          900: '#3B2F2F',
          950: '#2a1f1f',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
