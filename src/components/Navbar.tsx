import { useState } from "react";
import { navbarItems } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between items-center p-4 w-full max-w-[80%] mx-auto mt-10 bg-white/50 border border-white h-auto md:h-[66px] rounded-full z-10 relative px-8">
        <img src="logo.png" className="w-[120px] md:w-[156px]" />
        <div className="hidden md:flex flex-1 justify-center">
          <NavItems isMobile={false} />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <Button text="Contact Us" rootClassName="mt-4 md:mt-0" />
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 p-4 bg-white/50 border border-white rounded-b-lg md:hidden w-[90%] mx-auto mt-2"
        >
          <NavItems isMobile={true} />
          <Button text="Contact Us" rootClassName="mt-4" />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

const NavItems = ({ isMobile }: { isMobile: boolean }) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col gap-4 " : "flex-row gap-4 md:gap-8"
      }`}
    >
      {navbarItems.map((item, index) => (
        <span
          className={`${
            activeLink === index &&
            "bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text "
          } font-medium select-none cursor-pointer relative transition-all duration-300`}
          key={index}
          onClick={() => setActiveLink(index)}
        >
          {activeLink === index && (
            <motion.img
              src="star.png"
              className="w-3 absolute -right-2 -top-[2px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {item}
        </span>
      ))}
    </div>
  );
};
