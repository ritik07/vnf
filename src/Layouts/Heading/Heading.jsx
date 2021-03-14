import React from "react";
import { Container, Row, Col } from "reactstrap";

const Heading = ({ heading, subText }) => {
  return (
    <Container className="text-center">
      <Col className="p-15 mt-67">
        <h1 className="primary-txt-color f-50">{heading}</h1>
        <h6 className="about-sub-text f-20">{subText}</h6>
      </Col>
    </Container>
  );
};

export default Heading;
