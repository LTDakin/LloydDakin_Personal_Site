import React from "react";
import Hero from "../components/Hero";
import BackButton from "../components/BackButton";

function ContactPage(props) {
  const heroTitle = "Let's get in touch";
  const heroSubTitle = "I'll get back to you as soon as I can";
  return (
    <div>
      <Hero title={heroTitle} subtitle={heroSubTitle}></Hero>
      <BackButton />
    </div>
  );
}

export default ContactPage;
