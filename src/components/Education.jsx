import React from "react";
import EducationInfoBox from "./Education_Info_Box";
import CertificateInfoBox from "./Cert_Info_Box";
import { educationHistory } from "../assets/data/education.js";
import { certificates } from "../assets/data/certificate.js";

const Education = () => {
  return (
    <section className="min-h-screen w-full bg-background pt-20 pb-16 text-text">
      <div className="mx-auto max-w-9/10 space-y-16 px-4 sm:px-20">
        <div className="space-y-8">
          <h2 className="text-left text-5xl font-bold underline decoration-accent decoration-2 underline-offset-8 md:text-left">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {educationHistory.map((educationHistory) => (
            <EducationInfoBox educationinfo={educationHistory} />
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
