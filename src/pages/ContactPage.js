import React from "react";
import Hero from "../components/Hero";
import BackButton from "../components/BackButton";

function ContactPage(props) {
  const heroSubTitle = "Let's get in touch";
  return (
    <div>
      <Hero subtitle={heroSubTitle}></Hero>
      <BackButton />
    </div>
  );
}

export default ContactPage;
