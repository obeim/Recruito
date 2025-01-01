import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { testimonials } from "../constants";
import { motion } from "framer-motion";

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-2 rounded-full text-darkBlue font-medium mx-auto border border-neutralGray/20 inline-block">
          Testimonials
        </div>
      </motion.div>

      <motion.div
        className="text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Don’t just take our word for it—see what our clients say about
          Recruito AI.
        </h2>
      </motion.div>

      <motion.div
        className="max-w-full px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          // Set the initial slide to the second one (index 1)
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },

            1366: { slidesPerView: 2 },
            1440: { slidesPerView: 2.2 },
            1920: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) =>
            console.log("Slide index changed to: ", swiper.activeIndex)
          }
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white border border-neutralGray/20 rounded-lg p-6 h-auto w-full sm:w-[582px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-darkGray bg-lightGray/20 rounded-lg p-5 h-auto mt-6">
                  <div className="text-ellipsis line-clamp-3">
                    {testimonial.feedback}
                  </div>
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.img
          className="mx-auto mt-12 w-12"
          src="benfits/swipe_indicator.svg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
