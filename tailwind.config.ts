import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1020',
        card: '#111827',
        border: '#273244',
        accent: '#6d7cff',
      },
    },
  },
  plugins: [],
};

export default config;
