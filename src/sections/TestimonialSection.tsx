import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Martin",
    role: "Company, HR",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Doe",
    role: "Recruiter, IT",
    feedback:
      "Recruito AI is a game-changer. It streamlined our entire workflow and helped us focus on quality over quantity.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    role: "Manager, Sales",
    feedback:
      "I highly recommend Recruito AI. It’s intuitive and has made hiring so much easier.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      {/* Button */}
      <div className="text-center mb-6">
        <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
          Testimonials
        </button>
      </div>

      {/* Title */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Don’t just take our word for it—see what our clients say about
          Recruito AI.
        </h2>
      </div>

      {/* Swiper */}
      <div className="max-w-full px-6">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
