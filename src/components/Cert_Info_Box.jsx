import React from "react";
const BASE_URL = import.meta.env.BASE_URL;

const CertificateInfoBox = ({
  icon_location_path,
  certificateName,
  issuer,
}) => {
  return (
    <div className="bg-footer rounded-xl shadow-lg transition-all duration-300 ease-in-out p-6 border border-gray-700 hover:shadow-[0_20px_25px_-5px_rgba(231,111,81,0.2),0_10px_10px_-5px_rgba(231,111,81,0.1)] hover:-translate-y-1">
      <div className="flex items-center gap-1 ">
        <div className="flex-shrink-0 p-3 rounded-full">
          <img
            src={BASE_URL + icon_location_path}
            alt={`${issuer} logo`}
            className="h-10 w-10 rounded-full object-contain bg-white p-1"
          />
        </div>

        <div className=" flex-grow">
          <h3 className="text-lg font-bold text-text mb-1 leading-tight">
            {certificateName}
          </h3>
          <p className="text-md mt-1 font-medium text-accent-text">
            Issued by: {issuer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateInfoBox;
