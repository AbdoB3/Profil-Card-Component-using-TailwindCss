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
      
    },
  },
  plugins: [],
}

