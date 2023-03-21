/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"General Sans"']
    },
    extend: {
      colors: {
        'primary': '#273266',
        'gradient-purple': '#4F36E7',
        'gradient-blue': '#367EFF',
        'accent-blue': '#5B92EC',
        'gradient-background': '#FAFCFF'
      },
      fontSize: {
        'button': ['.9375rem', {
          lineHeight: '1.375rem'
        }],
        'h1': ['4rem', {
          lineHeight: '1'
        }]
      },
      blur: {
        'gradient-circles': '120px'
      }
    }
  },
  plugins: [],
}
