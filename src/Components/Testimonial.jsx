import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import Carousels from "./Carousels";

const Testimonial = () => {
  return (
    <section className="test bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative top-20">
          <img
            src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/co1@2x.png"
            alt="Testimonial"
            loading="lazy"
            className="max-w-xs md:max-w-sm lg:max-w-md md:py-2"
          />
        </div>

        {/* Right Carousel Section */}
        <div className="w-full md:w-1/2">
          
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide><Carousels/></SwiperSlide>
        <SwiperSlide><Carousels/></SwiperSlide>
        <SwiperSlide><Carousels/></SwiperSlide>
        
       
      </Swiper>
              
       
        </div>

      </div>
      
    </section>
  );
};

export default Testimonial;