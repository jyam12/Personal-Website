import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  bg-footer text-text">
      <div className="flex h-15 flex-col items-center justify-center sm:justify-between px-4 sm:px-6 lg:px-10 sm:flex-row">
        {/* Left side: Developer Credit */}
        <div className="text-center sm:text-left">
          <p className="text-base">Designed & Developed by Johnny Yam</p>
        </div>

        <div className="sm:mt-0">
          <ul className="flex items-center space-x-5">
            <li>
              <a
                href="mailto:jyam333@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-1 z-10 block transition-transform duration-200 ease-out link-underline-accent"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jyam12"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-1  z-10 block transition-transform duration-200 ease-out link-underline-accent"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/johnny-yam-24039b280"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-1 z-10 block transition-transform duration-200 ease-out link-underline-accent"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
