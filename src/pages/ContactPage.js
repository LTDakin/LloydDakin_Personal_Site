import React from "react";
import Hero from "../components/Hero";

function ContactPage(props) {
  const heroTitle = "Let's get in touch";
  const heroSubTitle = "I'll get back to you as soon as I can";
  return <Hero title={heroTitle} subtitle={heroSubTitle}></Hero>;
}

export default ContactPage;
