import React from "react";

const EducationInfoBox = ({
  icon_location_path,
  university,
  degree,
  sub_degree,
  main_area,
  cga,
  duration,
}) => {
  return (
    <div className="bg-footer rounded-2xl shadow-lg transition-all duration-300 ease-in-out p-8 w-full border border-gray-700 hover:shadow-[0_20px_25px_-5px_rgba(231,111,81,0.2),0_10px_10px_-5px_rgba(231,111,81,0.1)] hover:-translate-y-1">
      <div className="flex items-start gap-1">
        <div className="flex-shrink-0 p-3 rounded-full">
          <img
            src={icon_location_path}
            alt={`${university} logo`}
            className="h-16 w-16 rounded-full object-contain p-1"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-text mb-1">{university}</h3>
          <p className="text-base font-medium text-accent-text mb-0">
            {degree}
          </p>
          <p className="text-base font-medium text-accent-text mb-0">
            {sub_degree}
          </p>
          <span className="block mt-1 text-sm text-gray-400">{duration}</span>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex">
              <span className="font-semibold w-24 flex-shrink-0 text-text">
                Main Area:
              </span>
              <span>{main_area}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24 flex-shrink-0 text-text">
                CGA:
              </span>
              <span>{cga}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationInfoBox;
