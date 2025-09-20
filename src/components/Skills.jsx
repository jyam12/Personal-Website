import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { skillCategories } from "../assets/data/skill.jsx";

const Skills = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <section className="min-h-screen w-full bg-background pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-5 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            My Skills
          </h2>
        </div>

        <p className="mt-4 text-lg text-text">
          Here are some technologies I've been working with recently and
          continuously learning new technologies and skills.
        </p>

        {/* --- Tabs Container --- */}
        <TabGroup>
          <TabList className="flex space-x-1 rounded-xl bg-tag/80 p-1 max-w-xl mx-auto">
            {skillCategories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg p-2.5 text-sm font-medium leading-5 transition-colors duration-200 whitespace-nowrap ",
                    "ring-white/60 ring-offset-2 ring-offset-orange-300 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-accent text-text shadow"
                      : "text-slate-300 hover:bg-white/[0.12] hover:text-text"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-8">
            {skillCategories.map((category) => (
              <TabPanel
                key={category.name}
                className="rounded-xl focus:outline-none"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center text-center p-6 bg-footer/50 rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-800 hover:scale-105"
                    >
                      {skill.icon}
                      <h3 className="mt-4 font-semibold text-text">
                        {skill.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default Skills;
