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
      <div id="swiper" className="min-w-full max-w-md lg:max-w-full relative z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {imgs.map((element, id) => {
            return (
              <SwiperSlide key={id} className="-z-100 ">
                <div className="flex justify-center object-fill relative z-0">
                  <Image className="min-w-96 max-h-96 max-w-sm  lg:max-h-full lg:max-w-full overflow-hidden border-2 border-black" key={id} src={element} alt="image" />
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
