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
  return (
    <>
      <div className="position w-96 z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
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
              <SwiperSlide>
                <div className="relative object-fill w-96 h-80 z-0">
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
