import React from "react";
import { Nav } from "react-bootstrap";

import TitleLink from "../components/TitleLink";

function navbar() {
  return (
    <Nav
      fill
      className="flex-column"
      style={{ height: "100%", justifyContent: "center" }}
    >
      <TitleLink path={"/projects"} buttonText={"Projects"} />
      <TitleLink path={"/about"} buttonText={"About"} />
      <TitleLink path={"/contact"} buttonText={"Contact"} />
    </Nav>
  );
}

export default navbar;
