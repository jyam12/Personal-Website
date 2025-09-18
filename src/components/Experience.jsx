import React from "react";
import ExperienceInfoBox from "./Experience_Info_Box.jsx";

const Experience = () => {
  const experiences = [
    {
      icon_location_path: "src/assets/img/exp_logo/ibm_logo.png",
      company_name: "IBM China/Hong Kong Limited",
      position: "Summer Intern",
      duration: "Jul 2025 – Aug 2025",
      tasks: [
        "Engineered an AI-powered Q&A system using the RAG framework and Langflow to query corporate annual reports, reducing data retrieval and analysis time from hours to seconds",
        "Created synthetic, privacy - preserving datasets for a healthcare database, enabling development teams to test new features without risking patient data exposure",
      ],
    },
    {
      icon_location_path: "src/assets/img/exp_logo/Deloitte_logo.jpg",
      company_name: "Deloitte China",
      position: "Technical Consultant Intern",
      duration: "Jan 2024 – Aug 2024",
      tasks: [
        "Developed LLM applications using LangChain in JavaScript and Python, integrating responsive Vue.js components for interactive UIs",
        "Migrated LLM applications to backend API services with FastAPI and Django, performing API testing and debugging in Postman",
        "Configured multi-engine database testing environments in Docker; evaluated permissions and access controls across systems",
        "Designed database inventory process flow for ServiceNow Database Discovery, including custom patterns using Linux commands, SQL, JavaScript, and Regular Expression",
        "Developed custom user interfaces for the Database Inventory using Vue.js, aligning them with client user stories",
        "Integrated ServiceNow with CyberArk by creating an external credential resolver in Java and implementing a Privileged Identity Management workflow",
      ],
    },
    {
      icon_location_path: "src/assets/img/exp_logo/wmc_logo.jpeg",
      company_name: "Wealth Management Cube Limited",
      position: "Fintech System/ Web Developer Intern",
      duration: "Jun 2023 – Aug 2023",
      tasks: [
        "Automated the generation of monthly P&L and cash flow reports using JasperReport, which streamlined the quarterly auditing process",
        "Engineered an automated data pipeline using Python to scrape and consolidate fund data from over 5 financial websites, creating a unified dataset for analysis",
        "Developed a machine learning model to forecast fund trends",
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-900 pt-20 pb-16 text-text">
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
