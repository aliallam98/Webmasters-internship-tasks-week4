import categories from "../constants/Categories.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MainSectionAndSidebar = () => {
  return (
    <section className="">
      <div className="container flex">
        <aside className="hidden lg:flex flex-col gap-2 border-r w-48 p-10">
          {categories.map((category, i) => (
            <Link to={`/category/${category.name.toLocaleLowerCase()}`} key={i}>
              {category.name}
            </Link>
          ))}
        </aside>
        <Swiper
          pagination={true}
          modules={[Pagination,Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper !py-10 !overflow-hidden"
        >
          {[...Array(4)].map((_, i) => (
            <SwiperSlide className="bg-black !grid lg:!grid-cols-2 p-10 !overflow-hidden" key={i}>
              <div className="text-white flex flex-col justify-around items-center gap-2 mb-4">
                <h3 className="flex items-center gap-2">
                  <img
                    src="/images/1200px-Apple_gray_logo 1.png"
                    alt="Apple_gray_logo"
                  />
                  iPhone 14 Series
                </h3>
                <h1 className="text-xl  md:text-4xl lg:text-5xl xl:text-7xl">
                  Up to 10% 
                  off Voucher
                </h1>
                <Link
                  to={"/product"}
                  className="underline flex items-center w-fit"
                >
                  Shop Now <ArrowRight className="ml-2" />
                </Link>
              </div>
              <img
                src="./images/hero_endframe__cvklg0xk3w6e_large 2.png"
                alt="hero"
                className="mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSectionAndSidebar;
