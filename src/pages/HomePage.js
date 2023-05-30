import React from "react";

import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";

import profilePicture from "../assets/images/profile.jpg";

function HomePage(props) {
  const profileTitle = "About Me";
  const profileText = (
    <p>
      As a Full Stack Software Developer with a B.S in Computer Science from the
      University of Arizona, I am excited to be a part of the ever-evolving
      world of technology. My passion for computer science stems from the
      endless possibilities it holds for shaping our future. I am currently
      seeking an opportunity to work with an innovative company that can
      challenge me and provide feedback on my code, helping me to grow and excel
      in my career.
    </p>
  );

  return (
    <div>
      <HeroSection
        title={profileTitle}
        text={profileText}
        imageAlt="profile picture"
        image={profilePicture}
      />
    </div>
  );
}

export default HomePage;
