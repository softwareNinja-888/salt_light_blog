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
        fira: ['fira','sans-serif'],
        inter: ['inter','sans-serif'],
        roboto: ['roboto','sans-serif'],
      },
      backgroundImage: {  
      },
      backgroundColor: {
        'theme': '#222222'
      },
      colors: {
        secondary : ''
      }
    },
  },
  plugins: [],
}