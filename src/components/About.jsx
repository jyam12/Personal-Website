import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineRobot } from "react-icons/ai";
import {
  FaLayerGroup,
  FaCode,
  FaExchangeAlt,
  FaBroadcastTower,
  FaTools,
  FaRegImage,
} from "react-icons/fa";
import { LuBrain } from "react-icons/lu";

const About = () => {
  return (
    <Container fluid className="main-container">
      <Container fluid className="main-content">
        <Row>
          <Col md={12} className="main-heading">
            <h2>About</h2>
          </Col>
        </Row>
        <Row className="about-section">
          <Col md={4} className="about-text">
            <img src="src/assets/img/profile_pic.png" className="profile-pic" />
          </Col>
          <Col md={8} className="about-text">
            <p>
              As a final-year Electronic Engineering student at HKUST with an
              extended major in Artificial Intelligence, I specialize in signal
              processing & communication and Machine Learning. I am a proactive
              learner, skilled at quickly mastering new concepts by leveraging
              online resources and collaborating with peers. I thrive on
              exploring novel ideas and believe that learning from
              experimentation and feedback is the most effective way to discover
              optimal solutions.
            </p>
          </Col>
        </Row>

        <Row className="main-section">
          <Col md={12} className="main-heading">
            <h2>Interests</h2>
          </Col>
        </Row>
        <Row className="about-interests-section">
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <AiOutlineRobot />
              <h3>LLM Applicaiton</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <LuBrain />
              <h3>Machine Learning</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaLayerGroup />
              <h3>Full-Stack Development</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaCode />
              <h3>Software Engineering</h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaExchangeAlt />
              <h3>Digital Transformation</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaTools />
              <h3>Software Engineering</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaBroadcastTower />
              <h3>Communication Systems</h3>
            </div>
          </Col>
          <Col md={3} className="about-interests-item">
            <div className="icon-box">
              <FaRegImage />
              <h3>Image Processing</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
