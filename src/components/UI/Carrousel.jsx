"use client"

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <Slider {...settings}>
      <div className='h-[32rem]'>
        <img src="pizza.svg" alt="Imagem 1" />
      </div>
      <div className='h-[32rem]'>
        <img src="salame.svg" alt="Imagem 2" />
      </div>
      <div className='h-[32rem]'>
        <img src="chemex.svg" alt="Imagem 3" />
      </div>
    </Slider>
  );
};

export default Carousel;