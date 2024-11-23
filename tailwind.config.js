/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'geliat': ['Geliat', 'system-ui', 'sans-serif'],
        'et-book': ['ET Book', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', 'Georgia', 'serif'],
        'gt-alpina': ['GT Alpina', 'Georgia', 'serif'],
        'spectral': ['Spectral', 'Georgia', 'serif'],
        'sohne-mono': ['Söhne Mono', 'Consolas', 'monospace'],
      },
      colors: {
        // Light mode - soft, warm, inviting
        white: 'hsl(35, 30%, 98%)', // Slightly warm white
        gray: {
          50: 'hsl(35, 25%, 96%)',
          100: 'hsl(35, 20%, 94%)',
          200: 'hsl(35, 15%, 89%)',
          300: 'hsl(35, 12%, 82%)',
          400: 'hsl(35, 10%, 63%)',
          500: 'hsl(35, 8%, 45%)',
          600: 'hsl(35, 7%, 32%)',
          700: 'hsl(35, 6%, 25%)',
          800: 'hsl(35, 5%, 18%)',
          900: 'hsl(35, 4%, 12%)',
        },
        // Dark mode - deep, rich, contemplative
        slate: {
          50: 'hsl(225, 25%, 95%)',
        }
      }
    },
  },
}
