import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";
import { aboutSliderData } from "@/constants";
export default function AboutSlider() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  };
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {aboutSliderData.map(
          (
            item: { src: string; name: string; position: string },
            i: number
          ) => (
            <SwiperSlide
              key={i}
              className="grid place-content-center gap-4  h-[300px] p-4 "
            >
              <div className="bg-[#f5f5f5] rounded-md">
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto bg-contain"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
