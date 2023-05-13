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
              headingcolor:"#1c1c1"
            }
          },
    },
    plugins: [ require('@tailwindcss/forms')],

  }