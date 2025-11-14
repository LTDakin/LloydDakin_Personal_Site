import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

// Component imports
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Image imports
import nasaImg from "./assets/images/nasa.jpg";
import githubIcon from "./assets/images/github.png";
import linkedinIcon from "./assets/images/linkedIn.png";

function App() {
  // css variables
  const iconSize = "40px";
  const iconStyle = {
    height: iconSize,
    marginLeft: "20px",
  };
  // page code
  return (
    <div className="entire-page">
      <Row
        fluid
        style={{
          backgroundColor: "white",
          position: "absolute",
          height: "100%",
          margin: 0,
        }}
      >
        {/* Title, social icons column */}
        <Col
          className="align-items-center d-flex"
          fluid
          style={{ paddingLeft: 20, paddingRight: 10, paddingBottom: 10 }}
        >
          <Container>
            <Row>
              <Hero title={"Lloyd Dakin"} subtitle={"Software Engineer"} />
            </Row>
            <Row id="socials-row">
              <a
                href="https://github.com/LTDakin?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src={githubIcon}
                  alt="github icon"
                  style={{ height: iconSize, }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lloyd-dakin/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src={linkedinIcon}
                  alt="linkedin icon"
                  style={iconStyle}
                />
              </a>
            </Row>
          </Container>
        </Col>
        {/* Middle image column */}
        <Col
          className="align-items-center d-flex"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <img
            src={nasaImg}
            alt={"forest"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Col>
        {/* Page Navigation column */}
        <Col
          fluid
          className="align-items-center d-flex"
          style={{ paddingLeft: 0, paddingRight: 0 }}
          xl={6}
        >
          <Container
            id="content-container"
            fluid
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              height: "100%",
              overflow: "auto",
            }}
          >
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path="/">
                  <NavBar />
                </Route>
                <Route path="/projects">
                  <ProjectPage />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
              </Switch>
            </Router>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default App;
