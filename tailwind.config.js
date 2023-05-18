export default {
    content: [
      "./index.html",
      "./src/**/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily:{
              "maven" :["Maven Pro","sans-serif"]
            },
            colors:{
              textColor:"#5b5b5b",
              secondryColor:"#47465A",
              headingcolor:"#1c1c1",
              headingcolor2:"#484848"
            },
            spacing:{
             "500":"31.25rem"

            }
          },
    },
    plugins: [ require('@tailwindcss/forms')],

  }