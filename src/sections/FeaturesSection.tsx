import React from "react";
import { motion } from "framer-motion";
import { features } from "../constants";

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 max-w-[90%] lg:max-w-[80%] mx-auto mt-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-2 rounded-full text-darkBlue font-medium mx-auto border border-neutralGray inline-block">
          Features
        </div>
      </motion.div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 w-[90%] md:w-[80%] mx-auto">
          Streamline your recruitment with our advanced features
        </h2>
      </motion.div>
      <div className="space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-12 lg:flex-row ${
              feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
            } items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Text Content */}
            <div className="lg:w-1/2 p-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 w-[90%] md:w-[80%] mx-auto lg:mx-0">
                {feature.description}
              </p>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 h-full flex justify-center">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="max-w-full rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
