import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="5" className="footer-text">
          <h1>Designed & Developed by Johnny Yam</h1>
        </Col>
        <Col md="4"></Col>
        <Col md="3" className="footer-icons">
          <ul>
            <li>
              <a
                href="mailto:jyam333@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jyam12"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/johnny-yam-24039b280"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
