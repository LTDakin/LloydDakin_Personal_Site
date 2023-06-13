import React from "react";
import Hero from "../components/Hero";
import BackButton from "../components/BackButton";

import { Container } from "react-bootstrap";

function AboutPage(props) {
  const heroSubTitle = "Hello World";
  return (
    <div
      className="about-page-div"
      style={{ height: "100%", position: "relative" }}
    >
      <Container>
        <Hero subtitle={heroSubTitle}></Hero>
        <p>
          If you're reading this then I would first like to thank you for
          checking out my portfolio! It was fun to build and I had a lot of
          trouble wrangling the css to be the way I liked it, but finally got it
          to look like the minimal way I envisioned.
        </p>
        <p>
          Below you'll find my Resume, but if you want to know a little more
          about me personally click here
        </p>
      </Container>
      <BackButton />
    </div>
  );
}

export default AboutPage;
