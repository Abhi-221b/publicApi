import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Typography configuration
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        // Heading sizes
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: 'bold' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: 'bold' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body text sizes
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-base': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.25' }],
        
        // Caption/Label sizes
        'caption': ['0.875rem', { lineHeight: '1.25' }],
        'label': ['0.75rem', { lineHeight: '1', fontWeight: '600' }],
      },
      letterSpacing: {
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
      },
      textColor: {
        // Light mode
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
      },
    },
  },
  plugins: [typography],
};

export default config;
