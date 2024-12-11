/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        movefirst:{
          '0%': { transform: 'translate(-10%)',opacity:'0' },
          '100%': { transform: 'translate(0)' ,opacity:'1' },
          
        }
        ,
        moveleft:{
          '0%':{transform:'translate(400px)'},
          '100%':{transform:'translate(0)'}
        },
        moveright:{
          '0%':{transform:'translate(0)'},
          '100%':{transform:'translate(400px)'}
        },
        textUp:{
          '0%':{transform:'translate(0,100px)',opacity:'0'},
          '100%':{transform:'translate(0,0)',opacity:'1'}
        }
        
      },
      animation:{
        movefirst: 'movefirst 1s ease-in-out  ',
        moveleft:'moveleft 0.5s ease-in-out forwards',
        moveright:'moveright 0.5s ease-in-out forwards',
        textUp:'textUp 0.4s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

