/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Plus Jakarta Sans' is the closest free alternative to Google's "Product Sans"
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // The specific "Google Blue" used in their consumer products
        primary: {
          DEFAULT: '#1a73e8', 
          hover: '#1557b0',
        },
        // High-contrast dark text (not pure black)
        text: '#202124',
        // Soft gray text for descriptions
        muted: '#5f6368',
        // The "Google Gray" background
        subtle: '#f8f9fa',
        // Border colors
        border: '#dadce0',
      },
      boxShadow: {
        // Soft, diffused shadows used on Google Store cards
        'google': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google-hover': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'button': '0 1px 2px 0 rgba(0,0,0,0.05)',
      },
      borderRadius: {
        '4xl': '2rem', // For the large rounded cards
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}