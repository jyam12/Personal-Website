import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-background pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-5 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            Contact Information
          </h2>
        </div>
        <p className="mt-4 text-lg text-text">
          I'm currently available for graduate job and open to new
          opportunities. Feel free to reach out if you want to collaborate with
          me, or simply have a chat.
        </p>

        <div className="bg-slate-800/50 p-8 rounded-lg w-full ">
          <h2 className="text-2xl font-bold text-text mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-8">
            You can reach out to me through the following channels.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:jyam333@gmail.com"
              className="flex items-center group p-3 rounded-md hover:bg-slate-700/50 transition-colors"
            >
              <MdMailOutline className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
              <span className="text-slate-300 group-hover:text-accent-text transition-colors">
                jyam333@gmail.com
              </span>
            </a>
            <p className="flex items-center p-3">
              <MdOutlineLocationOn className="w-6 h-6 text-accent mr-4 flex-shrink-0" />

              <span className="text-slate-300">Hong Kong</span>
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="http://www.linkedin.com/in/johnny-yam-24039b280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-text transition-colors p-2 rounded-full hover:bg-accent/50"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/jyam12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-text transition-colors p-2 rounded-full hover:bg-accent/50"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
