import React from "react";
import ExperienceInfoBox from "./Experience_Info_Box.jsx";
import { experiences } from "../assets/data/experience.js";
const Experience = () => {
  return (
    <section className="min-h-screen w-full bg-background pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-16 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((experience) => (
            <ExperienceInfoBox
              icon_location_path={experience.icon_location_path}
              company_name={experience.company_name}
              position={experience.position}
              tasks={experience.tasks}
              duration={experience.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
