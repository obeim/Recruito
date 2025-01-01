import Button from "../components/Button";

import { motion } from "framer-motion";

const StartSection = () => {
  return (
    <div className="h-[80vh] relative">
      <motion.img
        src="start_section/ready_bg.png"
        className="absolute right-0 top-[20vh] hidden md:block"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src="start_section/ready_bg2.png"
        className="absolute left-0 top-[20vh] hidden md:block"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-col w-full h-full items-center justify-center relative z-10 px-4 md:px-0">
        <motion.img
          src="start_section/ready_search_people.svg"
          className="w-[80px] h-[80px] md:w-[114px] md:h-[114px]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.25 }}
        />
        <motion.p
          className="text-darkBlueGray text-2xl md:text-5xl font-semibold text-center max-w-full md:max-w-[530px] mb-6 md:mb-10 mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          Ready to enhance your hiring process?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 1.1 }}
        >
          <Button text="Request a Demo" />
        </motion.div>
      </div>
    </div>
  );
};

export default StartSection;
