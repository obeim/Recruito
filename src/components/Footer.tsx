import React from "react";
import { socialLinks } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-6  border-gray-200">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Recruito Logo"
            className="h-8 mb-4 md:mb-0"
          />

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                <img src={link.src} alt={link.alt} className="h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-10 w-full">
          {/* Social Icons */}
          <span className="text-darkGray font-medium text-sm mb-4 md:mb-0">
            © 2024 Recruito AI. All Rights Reserved.
          </span>
          {/* Links */}
          <div className="flex items-center space-x-4">
            <a
              href="/terms"
              className="text-darkGray font-medium text-sm hover:underline"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-darkGray font-medium text-sm hover:underline"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
