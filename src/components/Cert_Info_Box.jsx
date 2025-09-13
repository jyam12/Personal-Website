import React from "react";

// Self-contained SVG Icon for a certificate or award
const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="32"
    height="32"
    fill="currentColor"
  >
    <path d="M12 2C12 2 12 2 12 2C12 2 12 2 12 2L13.06 8.44L18.71 7.2L16.29 12.2L21.39 14.5L16 16.5L17.2 22.15L12 18.25L6.8 22.15L8 16.5L2.61 14.5L7.71 12.2L5.29 7.2L10.94 8.44L12 2M12 14.3C13.27 14.3 14.3 13.27 14.3 12C14.3 10.73 13.27 9.7 12 9.7C10.73 9.7 9.7 10.73 9.7 12C9.7 13.27 10.73 14.3 12 14.3Z" />
  </svg>
);

const CertificateInfoBox = ({ certificateName, issuer }) => {
  return (
    // Mapped to .certificate-info-box
    <div className="certificate-info-box">
      {/* Mapped to .box-content */}
      <div className="box-content">
        {/* Icon */}
        {/* Mapped to .icon-container */}
        <div className="icon-container">
          {/* Mapped to .icon */}
          <div className="icon">
            <AwardIcon />
          </div>
        </div>

        {/* Details Section */}
        {/* Mapped to .details-section */}
        <div className="details-section">
          {/* Mapped to .certificate-name */}
          <h3 className="certificate-name">{certificateName}</h3>
          {/* Mapped to .issuer */}
          <p className="issuer">Issued by: {issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateInfoBox;
