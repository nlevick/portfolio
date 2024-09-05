import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export const PRIMARY_COLOR = colors.teal[500];
export const BG_COLOR = colors.slate[900];

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave-motion 12s cubic-bezier(.55,0.5,.45,0.5) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: PRIMARY_COLOR,
        background: BG_COLOR,
      },
      keyframes: {
        'wave-motion': {
          '0%': { transform: 'translate3d(-90px, 0, 0)' },
          '100%': { transform: 'translate3d(85px, 0, 0)' },
        },
      },
      screens: {
        xs: '375px',
        ...defaultTheme.screens,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
