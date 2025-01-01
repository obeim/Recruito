import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "../constants";

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="py-40 relative">
      <img src="faq_bg.png" className="absolute top-0 w-full " />
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-2 rounded-full text-darkBlue font-medium mx-auto border border-neutralGray/20 inline-block">
          FAQs
        </div>
      </motion.div>
      <motion.div
        className="rounded-lg border border-neutralGray/20 max-w-[70%] mx-auto relative z-10 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${
                index !== faqItems.length - 1 && "border-b"
              } border-gray-200 px-5 py-2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-darkBlueGray font-semibold text-xl"
                onClick={() => toggle(index)}
              >
                {item.question}
                <motion.img
                  className="ml-2"
                  src="arrow-down-outline.svg"
                  whileInView={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              {open === index && (
                <motion.div
                  className="p-4 text-darkGray"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
