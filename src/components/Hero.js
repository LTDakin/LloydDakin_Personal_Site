import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

function Hero(props) {
    return (
        <div className="Hero">
            <Jumbotron className="bg-transparent Jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
                        {props.subtitle2 && <h3 className="lead font-weight-light">{props.subtitle2}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </div>
    )
}

export default Hero