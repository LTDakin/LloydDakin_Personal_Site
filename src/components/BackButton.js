import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      className="nav-link d-flex  align-items-center big-nav-link back-button"
      to={"/"}
    >
      <h1>Return</h1>
    </Link>
  );
}

export default BackButton;
