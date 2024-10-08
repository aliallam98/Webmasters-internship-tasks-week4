import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";
import categories from "../constants/Categories.json";

export default function CategorySlider() {
    const breakpoints = {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40 
        },
        860: {
          slidesPerView: 5,
          spaceBetween: 40 
        },
      };
  return (
    <>
      <Swiper 

        breakpoints = {breakpoints}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
    
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories.map((category, i) => (
          <SwiperSlide key={i} className="grid place-content-center text-center gap-2 border rounded-md h-[200px] p-4">
            <img src={category.src} alt={category.name} className="mx-auto"/>
            <h3>{category.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
