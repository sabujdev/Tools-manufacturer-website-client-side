import React from 'react';
import banner1 from "../../assets/banner/banner1.jfif"
import banner2 from "../../assets/banner/banner2.jfif"
import banner4 from "../../assets/banner/banner4.webp"

const Banner = () => {
    return (
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
        <img src={banner4} class="w-full"alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
        <img src={banner2} class="w-full"alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
        <img src={banner1} class="w-full"alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❮</a> 

          </div>
        </div> 

      </div>
    );
};

export default Banner;