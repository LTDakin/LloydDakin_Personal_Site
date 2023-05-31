import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function navbar() {
  return (
    <Nav
      fill
      className="flex-column"
      style={{ height: "100%", justifyContent: "center" }}
    >
      <Link
        style={{ color: "black" }}
        className="nav-link d-flex justify-content-center align-items-center"
        to="/projects"
      >
        <h1>Projects</h1>
      </Link>
      <Link
        style={{ color: "black" }}
        className="nav-link d-flex justify-content-center align-items-center"
        to="/about"
      >
        <h1>About</h1>
      </Link>
      <Link
        style={{ color: "black" }}
        className="nav-link d-flex justify-content-center align-items-center"
        to="/contact"
      >
        <h1>Contact</h1>
      </Link>
    </Nav>
  );
}

export default navbar;
