"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// FIX: This just says "images must be a list of strings". 
// Do not put the actual file path here.
interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "30px" }}>
         <ul className="m-0 p-0 [&>li.slick-active>button::before]:text-yellow-400 [&>li>button::before]:text-white [&>li>button::before]:opacity-75"> 
          {dots} 
        </ul>
      </div>
    ),
  };

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group">
      <Slider {...settings} className="h-full">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative h-[40vh] md:h-[50vh] outline-none">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${imgSrc}')` }}
            ></div>
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, rgba(0, 56, 117, 0.9), rgba(0, 168, 233, 0.75))`
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;