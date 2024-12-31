import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { logos } from "../constants";

const TrustedSection = () => {
  return (
    <div className="max-w-[90%] lg:max-w-[80%] bg-white py-8 mt-10 mx-auto select-none">
      <div className="text-center mb-6">
        <p className="text-gray-500 text-sm font-medium capitalize">
          Trusted By The World Leading Organisations
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap mt-12 relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 mx-4 transition-opacity duration-500 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
      </div>
    </div>
  );
};

export default TrustedSection;
