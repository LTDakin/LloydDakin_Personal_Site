import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <div className="Hero">
      <Container>
        {props.title && (
          <h1 className="display-1 font-weight-bolder">{props.title}</h1>
        )}
        {props.subtitle && (
          <h3 className="display-7 font-weight-light">{props.subtitle}</h3>
        )}
        {props.subtitle2 && (
          <h3 className="lead font-weight-light">{props.subtitle2}</h3>
        )}
      </Container>
    </div>
  );
}

export default Hero;
