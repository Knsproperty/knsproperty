/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#3e4861',
      secondary: '#0c2a54',
      lightgray: '#f8f9fb',
      lightgreen: '#e5ebe9',
      lightviolet: '#e8e5ea',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },

  daisyui: {
    themes: false,
    themes: [
      {
        mytheme: {
          black: '#000000',
          white: '#FFFFFF',
          primary: '#3e4861',
          secondary: '#0c2a54',
          lightgray: '#f8f9fb',
          lightgreen: '#e5ebe9',
          lightviolet: '#e8e5ea',
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
