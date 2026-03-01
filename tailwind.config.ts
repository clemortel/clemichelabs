import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00f2ff',
        'primary-dark': '#0d9da6',
        'bg-dark': '#0f2223',
        'bg-light': '#f5f8f8',
        'card-dark': '#162e2f',
        'card-light': '#ffffff',
        'accent-dark': '#1a3536',
        'text-muted': '#8ba8a9',
        'text-muted-light': '#6b7b7c',
        success: '#10b981',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 242, 255, 0.4)',
        'neon-subtle': '0 0 12px rgba(0, 242, 255, 0.2)',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
} satisfies Config
