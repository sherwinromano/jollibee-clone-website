/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      backgroundImage: {
        'hero-image': "url('/img/hero-banner.webp')"
      },
      fontFamily: {
        nunito: ['Nunito, sans-serif']
      },
      fontSize: {
        '1xl': '20px',
        '2xxl': '28px',
        '9xl': '54px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px'
      },
      colors: {
        main: '#D6001C',
        spaghetti: '#FFA400',
        yumburger: '#009CA6',
        button: '#FA8003',
        default: '#212529',
        featuredcolor: '#FFEAB8',
        btnColor: '#FC7308',
        copyright: '#4b4f58',
        links: '#212529'
      },
      height: {
        '15': '3.8rem',
        '25': '6.5rem',
        '98': '30rem',
        '100': '33rem',
        '18px': '50px',
        '60%': '60%'
      },
      width: {
        '98': '33rem',
        '85': '25rem',
        '2/2': '60%',
        '1/5': '40%',
        '165px': '250px',
        '1/3.3': '30%',
        '20': '20%'
      },
      padding: {
        '18': '5rem',
        '25': '6.5rem',
        '10px': '10px',
        '25px': '25px'
      },
      borderRadius: {
        xxl: '1.5rem'
      },
      borderWidth: {
        '2px': '2px'
      },
      translate: {
        '1/4': '75%'
      },
      inset: {
        '57': '14.5rem'
      },
      
    },
  },
  plugins: [],
}
