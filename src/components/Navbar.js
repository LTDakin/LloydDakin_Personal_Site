import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function navbar() {
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
      className="Nav"
    >
      <Nav className="flex-column">
        <Link style={{ color: "black" }} className="nav-link" to="/projects">
          Projects
        </Link>
        <Link style={{ color: "black" }} className="nav-link" to="/about">
          About
        </Link>
        <Link style={{ color: "black" }} className="nav-link" to="/contact">
          Contact
        </Link>
      </Nav>
    </Navbar>
  );
}

export default navbar;
