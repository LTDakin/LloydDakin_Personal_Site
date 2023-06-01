import React from "react";
import { Nav } from "react-bootstrap";

import LargeButton from "../components/NavBigButton";

function navbar() {
  return (
    <Nav
      fill
      className="flex-column"
      style={{ height: "100%", justifyContent: "center" }}
    >
      <LargeButton path={"/projects"} buttonText={"Projects"} />
      <LargeButton path={"/about"} buttonText={"About"} />
      <LargeButton path={"/contact"} buttonText={"Contact"} />
    </Nav>
  );
}

export default navbar;
