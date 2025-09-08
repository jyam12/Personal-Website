import React from "react";
import "bootstrap//dist/css/bootstrap.min.css";
// import './assets/vendor/icofont/icofont.min.css';
// import './assets/vendor/remixicon/remixicon.css';
// import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
// import './assets/vendor/boxicons/css/boxicons.min.css';
// import './assets/vendor/venobox/venobox.css';
import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Personal-Website" element={<Home />} />
          <Route path="/Personal-Website/about" element={<About />} />
          <Route path="/Personal-Website/education" element={<Education />} />
          <Route path="/Personal-Website/experience" element={<Experience />} />
          <Route path="/Personal-Website/projects" element={<Projects />} />
          <Route path="/Personal-Website/skills" element={<Skills />} />
          <Route path="/Personal-Website/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
