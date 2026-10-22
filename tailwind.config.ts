import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#f6f3ec',
        'paper-dark': '#141311',
        surface: '#ede8dd',
        'surface-dark': '#1d1b18',
        ink: '#1c1b18',
        'ink-dark': '#ece8df',
        muted: '#6b665c',
        'muted-dark': '#9d978b',
        rule: '#d9d2c3',
        'rule-dark': '#2e2b26',
        accent: '#b33a0b',
        'accent-dark': '#f08a5d',
        success: '#2f6b3f',
        error: '#b42318',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '3px',
        md: '6px',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
      maxWidth: {
        content: '1080px',
        prose: '660px',
      },
    },
  },
} satisfies Config
