module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      maxWidth:{
        container:"1440px"

      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",


      },
      colors:{
        amazon_blue:"#f96755",
        amazon_light:"#fa3f28",
        amazon_yellow:"#febd69",
        whiteText:"#ff3737",
        quantity_box:"#F0F2F2",
        footerBottom:"#131A22",
      },
boxShadow:{
  textShadow:"0px 0px 26px 0px red",
  amazonInput:"0 0 3px 2px rgba(228 121 17 /50%)"
},







    },
  },
  plugins: [],
}
