import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../../assets/images/slider.png"

const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div>      
        <Slider {...settings}>           
            <img src={sliderImage} alt='slider' className='w-full'/>        
            <img src={sliderImage} alt='slider' className='w-full' />        
            <img src={sliderImage} alt='slider' className='w-full' />           
        </Slider>
    </div>
  )
}


export default HomeSlider;