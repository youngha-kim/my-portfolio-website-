import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const useCarousel = (imgs: StaticImageData[]) => {
  // const swiper = document.getElementById("swiper")
  // swiper.style.zIndex = 0
  // console.log(swiper)

  return (
    <>
      <div id="swiper" className="relative w-full lg:w-96 z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imgs.map((element, id) => {
            return (
              <SwiperSlide key={id} className=" -z-100">
                <div className="relative object-fill w-fit h-80 z-0">
                  <Image key={id} src={element} alt="image" />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  );
};

export default useCarousel;
