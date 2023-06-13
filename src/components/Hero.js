import React from "react";
import { Container } from "react-bootstrap";

function Hero(props) {
  return (
    <div className="Hero">
      <Container style={{ padding: 0, margin: 0 }}>
        {props.title && (
          <h1
            className="display-1 font-weight-bolder"
            style={{ fontSize: "10em", fontFamily: "lemonmilk" }}
          >
            {props.title}
          </h1>
        )}
        {props.subtitle && (
          <h3
            className="display-7 font-weight-light"
            style={{ fontSize: "3em" }}
          >
            {props.subtitle}
          </h3>
        )}
        {props.subtitle2 && (
          <h3 className="lead font-weight-light">{props.subtitle2}</h3>
        )}
      </Container>
    </div>
  );
}

export default Hero;
