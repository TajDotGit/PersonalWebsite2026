/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // 'class' strategy lets ThemeContext toggle the .light class on <html>
  darkMode: 'class',
  theme: {
    extend: {
      // All colors reference CSS custom properties (defined in index.css).
      // Space-separated RGB channels enable Tailwind's opacity modifier
      // syntax (e.g. border-accent/40) to work correctly at runtime.
      colors: {
        background:          'rgb(var(--color-bg) / <alpha-value>)',
        surface:             'rgb(var(--color-surface) / <alpha-value>)',
        'surface-alt':       'rgb(var(--color-surface-alt) / <alpha-value>)',
        'text-primary':      'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-muted':        'rgb(var(--color-text-muted) / <alpha-value>)',
        accent:              'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover':      'rgb(var(--color-accent-hover) / <alpha-value>)',
        border:              'rgb(var(--color-border) / <alpha-value>)',
        'accent-red':        'rgb(var(--color-accent-red) / <alpha-value>)',
        'accent-red-hover':  'rgb(var(--color-accent-red-hover) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid hero font: 48px on small screens, scales up to 80px at wide viewports
        hero: ['clamp(48px, 7vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        cinema: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
