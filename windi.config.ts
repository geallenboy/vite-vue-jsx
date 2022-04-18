import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,tsx}', 'public/**/*.{html}', './*.html'],
    exclude: ['node_modules', '.git', './stats.html']
  },
  darkMode: 'class',
  attributify: true,
  shortcuts: {
    'wh-full': 'w-full h-full'
  },
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px'
    }
  },
  variants: {},
  plugins: []
});
