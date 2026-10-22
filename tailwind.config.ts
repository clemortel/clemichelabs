import type { Config } from 'tailwindcss'

const systemSans: string[] = [
  'ui-sans-serif',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
]

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#fcfcfb',
        'paper-dark': '#121212',
        surface: '#f2f2ef',
        'surface-dark': '#1c1c1b',
        ink: '#161616',
        'ink-dark': '#ececea',
        muted: '#5c5c57',
        'muted-dark': '#a3a39d',
        rule: '#e2e2de',
        'rule-dark': '#2a2a28',
        accent: '#b33a0b',
        'accent-dark': '#f08a5d',
        success: '#2f6b3f',
        error: '#b42318',
      },
      fontFamily: {
        sans: systemSans,
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
      maxWidth: {
        content: '1000px',
        prose: '660px',
      },
    },
  },
} satisfies Config
