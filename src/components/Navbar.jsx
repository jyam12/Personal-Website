import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";

import {
  MdOutlineWorkHistory,
  MdOutlineSchool,
  MdLightbulbOutline,
  MdOutlineContactPage,
} from "react-icons/md";

const NavBar = () => {
  // creates a state to track whether the navbar should be colored or not.
  const [NavBarBgColor, updateNavbar] = useState(false);

  const [expand, updateExpanded] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={NavBarBgColor ? "translucent" : "navbar"}
    >
      <Container className="Navbar">
        <Navbar.Toggle
          aria-controls="NavbarCollapse"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          {/* <span></span>
          <span></span>
          <span></span> */}
        </Navbar.Toggle>

        <Navbar.Collapse id="NavbarCollapse">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "0.1em" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "0.1em" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/education"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineSchool style={{ marginBottom: "0.1em" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/experience"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineWorkHistory style={{ marginBottom: "0.1em" }} />{" "}
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineProject style={{ marginBottom: "0.1em" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/skills"
                onClick={() => updateExpanded(false)}
              >
                <MdLightbulbOutline style={{ marginBottom: "0.1em" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Personal-Website/contact"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineContactPage style={{ marginBottom: "0.1em" }} />{" "}
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
