/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "maven" :["Maven Pro","sans-serif"]
      },
      colors:{
        textColor:"#5b5b5b",
        grey:"#EEEEEE",
        secondryColor:"#47465A",
        headingcolor:"#353535"
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
}

