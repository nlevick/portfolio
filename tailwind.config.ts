import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'wave-motion': {
          '0%': { transform: 'translate3d(-90px, 0, 0)' },
          '100%': { transform: 'translate3d(85px, 0, 0)' },
        },
      },
      animation: {
        wave: 'wave-motion 13s cubic-bezier(.55,0.5,.45,0.5) infinite',
      },
      screens: {
        xs: '375px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
