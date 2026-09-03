import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function HeroSection(props) {
  const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    display: 'block',
  };
  const rowStyle = {
    height: '500px',
  };
  return (
    <div>
      <Jumbotron className="Jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row style={rowStyle} className="justify-content-center">
            <Col className="my-auto" md={3} sm={12}>
              <img src={props.image} alt={props.imageAlt} style={imgStyle} />
            </Col>
            <Col className="my-auto" md={5} sm={12}>
              <h2 className="display-5 font-weight-bolder">{props.title}</h2>
              <br />
              <p>{props.text}</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HeroSection;
