import React from "react";
import { benefits } from "../constants";

import { motion } from "framer-motion";

const BenefitsSection: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-900 py-16 px-4 sm:px-8 lg:px-16 text-white relative no select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="benfits/benfits_bg.png" className="absolute right-0 top-0" />
      <img src="benfits/benfits_bg2.png" className="absolute left-0 top-0" />

      <div className="text-center mb-12 relative z-10">
        <motion.p
          className="text-aquaGreen text-sm font-medium uppercase border border-neutralGray/20 rounded-full inline-block px-5 py-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock the advantages of using Recruito AI for your hiring needs.
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-darkSky cursor-pointer w-full sm:w-[48%] md:w-[30%] lg:w-[27%] xl:w-[383px] xl:h-[276px] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-neutralGray/20 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="h-14 w-14 text-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
