import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

import TempNavBar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import forestImg from "./assets/images/forest.jpg";
import githubIcon from "./assets/images/github.png";
import linkedinIcon from "./assets/images/linkedIn.png";
import instagramIcon from "./assets/images/instagram.png";

function App() {
  // css variables
  const iconSize = "40px";
  // page code
  return (
    <Router>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row
          fluid
          style={{
            backgroundColor: "lightgray",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Col
            className="align-items-center d-flex"
            fluid
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Container>
              <Row>
                <Hero title={"Lloyd Dakin"} subtitle={"Software Developer"} />
              </Row>
              <Row id="socials-row">
                <img
                  src={githubIcon}
                  alt="github icon"
                  style={{ height: iconSize, marginLeft: "20px" }}
                />
                <img
                  src={linkedinIcon}
                  alt="linkedin icon"
                  style={{ height: iconSize, marginLeft: "20px" }}
                />
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  style={{ height: iconSize, marginLeft: "20px" }}
                />
              </Row>
            </Container>
          </Col>
          <Col
            className="align-items-center d-flex"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <img
              src={forestImg}
              alt={"forest"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col
            fluid
            className="align-items-center d-flex"
            style={{ paddingLeft: 0, paddingRight: 0 }}
            xl={6}
          >
            <Container
              id="content-container"
              fluid
              style={{ paddingLeft: 0, paddingRight: 0, height: "100%" }}
            >
              <Route path="/" exact render={() => <TempNavBar />} />
              <Route path="/projects" exact render={() => <HomePage />} />
              <Route path="/about" exact render={() => <AboutPage />} />
              <Route path="/contact" exact render={() => <ContactPage />} />
            </Container>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
