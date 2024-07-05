import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/button.js',
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
        wave: 'wave-motion 12s cubic-bezier(.55,0.5,.45,0.5) infinite',
      },
      screens: {
        xs: '375px',
        ...defaultTheme.screens,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: '#0ea5e9',
          },
        },
      },
    }),
  ],
};
export default config;
