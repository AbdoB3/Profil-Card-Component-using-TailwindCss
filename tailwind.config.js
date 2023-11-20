/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [],
  purge:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container:{
        center:true,
      },
      colors: {
        cyan: 'hsl(185, 75%, 39%)',
      },
      
    },
  },
  plugins: [],
}

