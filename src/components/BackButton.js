import React from "react";
import { Link } from "react-router-dom";
import backButtonImg from "../assets/images/backButton.png";

function BackButton() {
  return (
    <div className="backbutton">
      <Link to={"/"}>
        <img
          className="back-button-img"
          src={backButtonImg}
          alt="back button"
        ></img>
      </Link>
    </div>
  );
}

export default BackButton;
