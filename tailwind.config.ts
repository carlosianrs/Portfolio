import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: {
          100: '#7EA4D7',
          200: '#2C85FC',
          300: '#2266C1',
          400: '#0D284C',
        },
        cyan: {
          100: '#2DEBFC',
          200: 'rgba(17, 181, 196, 1)',
          300: '#084c53ff',
        },
        gray: {
          100: '#F9FAFC',
          200: '#D3D5D9',
          300: '#93979F',
          350: '#2e333bff',
          400: '#20242C',
          500: '#16181D',
          600: '#14161A',
          700: '#101216',
          800: '#0B0C0F',
        },
      },
      fontFamily: {
        sans: ['PT Sans Caption', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '150%', fontWeight: '400' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
