import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationInfoBox from "./Education_Info_Box";
import CertificateInfoBox from "./Cert_Info_Box";
// import { GiDuration } from "react-icons/gi";

const Education = () => {
  const educationHistory = [
    {
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
      name: "Machine Learning Specialist - Associate",
      issuer: "IBM",
    },
    {
      name: "Watsonx.ai Technical Essentials",
      issuer: "IBM",
    },
    {
      name: "Watsonx.data Technical Essentials",
      issuer: "IBM",
    },
  ];

  return (
    <Container fluid className="main-container">
      <Container fluid className="main-content">
        <Row>
          <Col md={12} className="main-heading">
            <h2>Education</h2>
          </Col>
        </Row>
        <Row>
          {educationHistory.map((educationHistory) => (
            <EducationInfoBox
              university={educationHistory.university}
              degree={educationHistory.degree}
              sub_degree={educationHistory.sub_degree}
              duration={educationHistory.duration}
              main_area={educationHistory.main_area}
              cga={educationHistory.cga}
            />
          ))}
        </Row>
        <Row className="main-section">
          <Col md={12} className="main-heading">
            <h2>Certificate</h2>
          </Col>
        </Row>
        <Row>
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <CertificateInfoBox
                // key={index}
                certificateName={cert.name}
                issuer={cert.issuer}
              />
            ))}
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Education;
