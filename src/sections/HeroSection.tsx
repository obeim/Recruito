import Button from "../components/Button";
import { motion } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  return (
    <div
      className="max-w-[90%] lg:max-w-[80%] mx-auto pt-16 lg:pt-32 text-center relative"
      ref={ref}
    >
      <motion.img
        className="absolute bottom-[20%] lg:bottom-[34%] -left-24 z-0 w-1/2 lg:w-auto"
        src="hero_assets/docker-pattern-right4.png"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="text-4xl lg:text-6xl font-semibold leading-snug lg:leading-[1.4] w-[90%] lg:w-[80%] mx-auto"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Revolutionize Your Hiring Process with{" "}
        <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text relative">
          Recruito AI
          <motion.img
            src="hero_assets/double_star.png"
            className="absolute -right-5 lg:-right-9 w-5 lg:w-6 top-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </span>
      </motion.div>
      <motion.div
        className="text-base lg:text-lg text-gray-500 w-[90%] lg:w-[50%] mx-auto mt-4 lg:mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your fully automated hiring assistant that sources, screens, and
        interviews candidates effortlessly
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-12 items-center gap-5">
        <motion.button
          className="px-6 py-2 border border-neutralGray/50 rounded-full h-10"
          whileHover={{ scale: 1.1 }}
        >
          Start Your Free Trial
        </motion.button>
        <Button text="Request a Demo" />
      </div>
      <div className="bg-lightBlueGray/30 w-full p-4 mt-12 lg:mt-24 rounded-3xl relative">
        <p className="text-darkGray mb-4 font-medium capitalize">
          See how we create an autonomous ai agent{" "}
        </p>
        <motion.img
          src="hero_assets/hero_image1.png"
          className="w-full lg:w-auto"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="hero_assets/Product1.png"
          className="absolute top-20 lg:top-28 -right-10 lg:-right-20 w-1/3 lg:w-auto"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="hero_assets/Customers1.png"
          className="absolute bottom-5 lg:bottom-10 -left-10 lg:-left-20 w-1/3 lg:w-auto"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
