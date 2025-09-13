import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

const EducationInfoBox = ({
  university,
  degree,
  sub_degree,
  main_area,
  cga,
  duration,
}) => {
  return (
    <div className="education-info-box">
      {/* Icon */}
      <div className="box-content">
        <div className="icon-container">
          <div className="icon">
            <RiGraduationCapLine />
          </div>
        </div>

        {/* Details Section */}
        <div className="details-section">
          <h3 className="university">{university}</h3>
          <p className="degree">{degree}</p>
          <p className="degree">{sub_degree}</p>
          <span className="duration">{duration}</span>
          <div className="info-container">
            <div className="info-row">
              <span className="info-label">Main Area:</span>
              <span>{main_area}</span>
            </div>
            <div className="info-row">
              <span className="info-label">CGA:</span>
              <span>{cga}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationInfoBox;
