import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgFive,bannerImgFour, bannerImgOne, bannerImgThree, bannerImgTwo, } from '../../assets';
const Banner = () => {
    const [dotActive, setDocActive] =useState(0);
    const settings = {
      dots:true,
      isFinite:true,
      autoplay:true,
      sliderToShow:1,
      sliderToScroll:1,
      arrows:false,
        beforeChange:(prev, next)=>{
            setDocActive(next);
        },
        appendDots: (dots) => (
            <div
              style={{
          position:"absolute",
          top:"70%",
          left:"0",
          right:"0",
          margin:"0 auto",
          transform:"translate(-50% -50%)",
          width:"210px",
              }}
            >
              <ul style={{width:"100%", display: "flex", alignItems:"center", justifyContent:"space-between"}}> {dots} </ul>
            </div>
          ),
          customPaging: (i)  => (
            <div
              style={
                i === dotActive
                ? {
                    width: "30px",
                    height:"30px",
                    borderRadius:"50%",
                    alignItems:"center",
                    display:"flex",
                    justifyContent:"center",
                    color:"#D70040",
                    background:"#DFFF00",
                    padding:"8px 0",
                    cursor:"pointer",
                    border:"1px solid #f3a847"
                  }
                  :{
                    width: "30px",
                    height:"30px",
                    borderRadius:"50%",
                    alignItems:"center",
                    display:"flex",
                    justifyContent:"center",
                    color:"#D70040",
                    background:"#DFFF00",
                    padding:"8px 0",
                    cursor:"pointer",
                    border:"1px solid #f3a847"
                  }
                  
                

              }
            >
              {i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='w-full'>
     <div className='w-full h-full relative'>
     <Slider {...settings}>
      <div>
       <img src={bannerImgFive} alt="bannerIngFive" />
      
      </div>
      <div>
       <img src={bannerImgFour} alt="bannerIngFour" />
      
      </div> 
        <div>
       <img src={bannerImgThree} alt="bannerIngThree" />
      
      </div>   <div>
       <img src={bannerImgTwo} alt="bannerIngTwo" />
      
      </div>   <div>
       <img src={bannerImgOne} alt="bannerIngOne" />
      
      </div>
    </Slider>
     </div>
    </div>
  )
}

export default Banner
