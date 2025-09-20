import React from "react";
import { AiOutlineRobot } from "react-icons/ai";

import {
  FaLayerGroup,
  FaCode,
  FaExchangeAlt,
  FaBroadcastTower,
  FaTools,
  FaRegImage,
} from "react-icons/fa";
import { LuBrain } from "react-icons/lu";

const BASE_URL = import.meta.env.BASE_URL;

const InterestCard = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center p-5 bg-box transition-all duration-300 ease-in-out rounded-lg hover:bg-box-hover hover:shadow-xl hover:-translate-y-1">
    {Icon && <Icon className="h-6 w-6 text-accent" />}
    <h3 className="font-bold m-0 pl-4 leading-none text-lg text-text">
      {title}
    </h3>
  </div>
);

const About = () => {
  const interests = [
    { icon: AiOutlineRobot, title: "LLM Application" },
    { icon: LuBrain, title: "Machine Learning" },
    { icon: FaLayerGroup, title: "Full-Stack Development" },
    { icon: FaCode, title: "Software Engineering" },
    { icon: FaExchangeAlt, title: "Digital Transformation" },
    { icon: FaTools, title: "Software Engineering" },
    { icon: FaBroadcastTower, title: "Communication Systems" },
    { icon: FaRegImage, title: "Image Processing" },
  ];
  return (
    <section className="min-h-screen w-full bg-gray-900 pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-16 px-4 sm:px-20">
        {/* --- About Me Section --- */}
        <div className="space-y-8">
          <h2 className="text-center text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            About Me
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={BASE_URL + "/img/profile_pic.png"}
                alt="Johnny Yam"
                className="mx-auto block h-auto w-full max-w-xs rounded-full shadow-lg"
              />
            </div>
            <div className="text-justify text-md leading-7 text-text md:text-left">
              <p>
                As a final-year Electronic Engineering student at HKUST with an
                extended major in Artificial Intelligence, I specialize in
                signal processing & communication and Machine Learning. I am a
                proactive learner, skilled at quickly mastering new concepts by
                leveraging online resources and collaborating with peers. I
                thrive on exploring novel ideas and believe that learning from
                experimentation and feedback is the most effective way to
                discover optimal solutions.
              </p>
            </div>
          </div>
        </div>

        {/* --- Interests Section --- */}
        <div className="space-y-8">
          <h2 className="text-center text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8">
            Interests
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest, index) => (
              <InterestCard
                key={index}
                icon={interest.icon}
                title={interest.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
