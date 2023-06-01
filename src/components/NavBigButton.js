import React from "react";
import { Link } from "react-router-dom";

function navBigButton(props) {
  return (
    <Link
      style={{ color: "black" }}
      className="nav-link d-flex justify-content-center align-items-center"
      to={props.path}
    >
      <h1 style={{ fontSize: "60px", fontFamily: "coolvetica" }}>
        {props.buttonText}
      </h1>
    </Link>
  );
}

export default navBigButton;
