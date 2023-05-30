import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

import { Container } from "react-bootstrap";

function AboutPage(props) {
  const heroTitle = "About Me";
  const heroSubTitle = "My skills and journey to becoming a software developer";
  return (
    <div>
      <Hero title={heroTitle} subtitle={heroSubTitle}></Hero>
      <Container>
        <p>
          My journey as a Software Developer started at Tech Core, where I built
          dynamic web apps using JavaScript, HTML, CSS, and SQL. I quickly
          realized my love for coding and decided to pursue a degree in Computer
          Science at the University of Arizona. After graduation, I landed an
          internship at Amazon as a Software Development Engineer, where I
          developed an internal analytics tool and worked with AWS EC2, React,
          Bootstrap, and RDS.
        </p>
        <p>
          Most recently, I worked at Avanade as a Full Stack Developer
          consultant for multiple clients. I developed a backend service using
          .Net API, Entity Framework, and SQL, and developed controllers using
          C# in ASP.NET with GET, POST, PUT endpoints. I also utilized Entity
          Framework and Java Spring models to manipulate SQL data and developed
          front-end pages in both Angular and React connected to APIs.
        </p>
        <p>
          Aside from my work experience, I have also developed various projects
          that showcase my skills, such as a Photography Planner Site, Euclidean
          Clustering Algorithm, and Plant Social Media Site. Additionally, I
          hold a certification in AZ-900 and possess excellent communication
          skills, UI/UX design experience, and an understanding of various
          frameworks, languages, and databases such as Java, Python, JavaScript,
          HTML, CSS, MongoDB, and SQL.
        </p>
      </Container>
    </div>
  );
}

export default AboutPage;
