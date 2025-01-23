/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['geist','sans-serif'],
        lora: ['lora','sans-serif'],
        nunito: ['nunito','sans-serif'],
        poppins: ['poppins','sans-serif'],
        source: ['source','sans-serif'],
        mont: ['mont','sans-serif'],
        inter: ['inter','sans-serif'],
        roboto: ['roboto','sans-serif'],
      },
      backgroundImage: { 
        blogBackground: 'url("/blog/churchC1.webp")' 
      },
      backgroundColor: {
        'theme': '#000000'
      },
      colors: {
        secondary : ''
      }
    },
  },
   daisyui: {
    themes: [
      {
        light: {
          "primary": "#ffffff",
        },
        dark: {
          "primary": "#000000",
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}