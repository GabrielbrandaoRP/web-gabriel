import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      keyframes :{
        float:{
          '0%, 100%' :{ transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-20px)'}
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      }

    },
  },
  plugins: [],
};

export default config;
