import React from "react";
import { Link } from "react-router-dom";

import "./components.css";

function navBigButton(props) {
  return (
    <div className="nav-link d-flex justify-content-center align-items-center big-nav-link">
      <Link
        style={{ color: "black" }}
        className="nav-link d-flex justify-content-center align-items-center"
        to={props.path}
      >
        <h1
          className="big-nav-link-text"
          style={{ fontSize: "10em", fontFamily: "coolvetica" }}
        >
          {props.buttonText}
        </h1>
      </Link>
    </div>
  );
}

export default navBigButton;
