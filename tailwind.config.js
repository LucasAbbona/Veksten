module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        colors:{
          'Principal':'#04009A',
          'Secundario':'#03001C'
        },
        width:{
          '30%':'30%',
          '32%':'32%'
        },
        height:{
          'h-1px':'1px',
          '600':'600px'
        }
      },
    },
    plugins: [],
  }