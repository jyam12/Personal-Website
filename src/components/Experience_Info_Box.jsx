import React from "react";
const BASE_URL = import.meta.env.BASE_URL;

const ExperienceInfoBox = ({
  icon_location_path,
  company_name,
  position,
  tasks,
  duration,
}) => {
  return (
    <div className="bg-footer rounded-2xl shadow-lg transition-all duration-300 ease-in-out p-8 w-full border border-gray-700 hover:shadow-[0_20px_25px_-5px_rgba(231,111,81,0.2),0_10px_10px_-5px_rgba(231,111,81,0.1)] hover:-translate-y-1">
      <div className="flex items-start gap-1">
        <div className="flex-shrink-0 p-3 rounded-full">
          <img
            src={BASE_URL + icon_location_path}
            alt={`${company_name} logo`}
            className="h-16 w-16 rounded-full object-contain bg-white p-1"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-text mb-1">{company_name}</h3>
          <span className="block mt-1 text-sm text-gray-400">{duration}</span>
          <p className="text-md font-medium text-accent-text mb-0">
            {position}
          </p>

          <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-text">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          {/* <p className="text-md font-medium text-text mb-0">{tasks}</p> */}
        </div>
      </div>
    </div>
  );
};
export default ExperienceInfoBox;
