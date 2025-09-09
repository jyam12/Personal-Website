import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Type() {
  return (
    <div className="home-typewriter">
      <Typewriter
        options={{
          strings: [
            "AI Engineer",
            "Technical Consultant",
            "Full-Stack Developer",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: "natural",
        }}
      />
    </div>
  );
}

const Home = () => {
  return (
    <Container fluid className="main-content">
      <Container fluid className="home-content">
        <Row>
          <Col md={8} className="home-heading">
            <h1>
              Hi I'm <strong className="home-emphasize"> Johnny Yam</strong>{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <div className="home-introduction">
            <h2>I'm</h2>
            <Type />
          </div>
        </Row>
        <Row className="main-section">
          <Col md={12} className="home-about-description">
            <h2>
              A BRIEF <strong className="home-emphasize">INTRODUCTION</strong>
            </h2>
            <p className="home-about-body">
              I'm a <strong className="home-emphasize">solutions-driven</strong>{" "}
              Software Engineer specializing in{" "}
              <strong className="home-emphasize">full-stack development</strong>{" "}
              and
              <strong className="home-emphasize"> AI/ML</strong>. My experience
              includes{" "}
              <strong className="home-emphasize">
                building LLM-powered applications
              </strong>
              , responsive user interfaces, and scalable database systems. As a
              <strong className="home-emphasize"> collaborative</strong> and{" "}
              <strong className="home-emphasize">quick-learning</strong> team
              player, I enjoy using machine learning to{" "}
              <strong className="home-emphasize">
                solve complex data challenges
              </strong>{" "}
              and thrive in{" "}
              <strong className="home-emphasize">
                fast-paced environments
              </strong>
              .
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Link to="/Personal-Website/about">
              <Button variant="primary" className="learn-more-btn">
                Learn More About Me
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
