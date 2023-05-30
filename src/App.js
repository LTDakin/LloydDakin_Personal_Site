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

function App() {
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
            <Hero title={"Lloyd Dakin"} subtitle={"Software Developer"} />
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
            <Route path="/" exact render={() => <TempNavBar />} />
            <Route path="/projects" exact render={() => <HomePage />} />
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/contact" exact render={() => <ContactPage />} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
