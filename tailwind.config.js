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
        // System fonts for general use
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        // High-quality serif font stack
        serif: ['Charter', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        // Monospace for most text
        mono: ['"SF Mono"', '"Roboto Mono"', 'Consolas', 'monospace'],
        // Geliat for the heading
        geliat: ['Geliat', 'serif'],
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
          100: 'hsl(225, 25%, 89%)',
          200: 'hsl(225, 25%, 82%)',
          300: 'hsl(225, 25%, 73%)',
          400: 'hsl(225, 25%, 65%)',
          500: 'hsl(225, 25%, 55%)',
          600: 'hsl(225, 25%, 45%)',
          700: 'hsl(225, 30%, 25%)',
          800: 'hsl(225, 35%, 15%)',
          900: 'hsl(225, 40%, 8%)', // Deep, rich background
        },
        // Accent colors for both modes
        blue: {
          50: 'hsl(210, 100%, 97%)',
          100: 'hsl(210, 95%, 92%)',
          200: 'hsl(210, 90%, 85%)',
          300: 'hsl(210, 85%, 75%)',
          400: 'hsl(210, 80%, 65%)',
          500: 'hsl(210, 75%, 55%)',
          600: 'hsl(210, 80%, 45%)',
          700: 'hsl(210, 85%, 35%)',
          800: 'hsl(210, 90%, 25%)',
          900: 'hsl(210, 95%, 15%)',
          950: 'hsl(210, 100%, 8%)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'light': '0 0 30px rgba(0, 0, 0, 0.03)',
        'dark': '0 0 30px rgba(0, 0, 0, 0.2)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '680px',
            fontSize: '18px',
            lineHeight: '1.8',
            color: 'var(--tw-prose-body)',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              fontFamily: 'Charter, Georgia, serif',
              color: 'rgb(41, 41, 41)',
            },
            'h1, h2, h3': {
              fontFamily: 'Geliat, serif',
              fontWeight: '400',
              color: 'rgb(41, 41, 41)',
            },
            blockquote: {
              fontStyle: 'italic',
              fontFamily: 'Charter, Georgia, serif',
              borderLeftWidth: '2px',
              borderLeftColor: '#e5e7eb',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
        lg: {
          css: {
            'h1, h2, h3': {
              fontFamily: 'Geliat, serif',
              fontWeight: '400',
            },
            'blockquote': {
              fontStyle: 'italic',
              borderLeftColor: 'hsl(35, 12%, 82%)',
            },
            figcaption: {
              textAlign: 'center',
              fontStyle: 'italic',
              color: 'hsl(35, 10%, 63%)',
            },
          },
        },
      },
      animation: {
        'in': 'in 0.3s ease-out',
        'fade-in-0': 'fade-in 0.3s ease-out',
        'zoom-in-95': 'zoom-in-95 0.3s ease-out',
        'subtle-drift': 'drift 30s linear infinite',
        'glow-pulse': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        'in': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'zoom-in-95': {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        drift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
