import React from "react";
import EducationInfoBox from "./Education_Info_Box";
import CertificateInfoBox from "./Cert_Info_Box";

const Education = () => {
  const educationHistory = [
    {
      icon_location_path: "src/assets/img/edu_logo/ust_logo.png",
      university: "The Hong Kong University of Science & Technology",
      degree:
        "Bachelor of Electronic Engineering with Extended Major in Artificial Intelligence",
      sub_degree: "Minor in Information Technology",
      main_area:
        "Signal Processing and Communications, Artificial Intelligence and Embedded Systems",
      cga: "3.16/4.3",
      duration: "Sep 2021 - Jun 2026 (Expected)",
    },
  ];

  const certificates = [
    {
      icon_location_path: "src/assets/img/cert_logo/ibm_logo.png",
      name: "Machine Learning Specialist - Associate",
      issuer: "IBM",
    },
    {
      icon_location_path: "src/assets/img/cert_logo/ibm_logo.png",
      name: "Watsonx.ai Technical Essentials",
      issuer: "IBM",
    },
    {
      icon_location_path: "src/assets/img/cert_logo/ibm_logo.png",
      name: "Watsonx.data Technical Essentials",
      issuer: "IBM",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-900 pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-16 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {educationHistory.map((educationHistory) => (
            <EducationInfoBox
              icon_location_path={educationHistory.icon_location_path}
              university={educationHistory.university}
              degree={educationHistory.degree}
              sub_degree={educationHistory.sub_degree}
              duration={educationHistory.duration}
              main_area={educationHistory.main_area}
              cga={educationHistory.cga}
            />
          ))}
        </div>

        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8">
            Certificate
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <CertificateInfoBox
              icon_location_path={cert.icon_location_path}
              certificateName={cert.name}
              issuer={cert.issuer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
