/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#02c7c5',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        health: {
          50: '#f0f9f8',
          100: '#d1eae7',
          200: '#a3d5cf',
          300: '#75c0b7',
          400: '#47ab9f',
          500: '#227369',
          600: '#1a5a52',
          700: '#15443e',
          800: '#0f2d29',
          900: '#0a1615',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
