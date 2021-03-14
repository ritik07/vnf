import React from "react";
import { Container, Row, Col } from "reactstrap";
import sourced from "../../Assets/YourFood/sourced.svg";
import slideImg1 from "../../Assets/Slider/slide1.jpg";
import slideImg2 from "../../Assets/Slider/slide2.jpg";
import slideImg3 from "../../Assets/Slider/slide3.jpg";
import Slider from "../Slider/Slider";

const YourFood = () => {
  return (
    <Container className="mt-80 mb-18">
      <Row>
        <Col md={6}>
          <img src={sourced} alt="sourced" />
          <p className="your-food-sub-text f-35 font-weight-bold">
            Your food is sourced from the best producers and graded carefully by
            our experts
          </p>
          <p className="text-black">
            Browse across categories of fresh vegetables and fruits, to
            seamlessly create your order basket, track your delivery and pay
            effortlessly. VnF contributes to your profits and well being by
            deriving insights from data to optimize every stage of the
            Farm-to-Food cycle.
          </p>
        </Col>
        <Col md={6} className="align-to-center">
          <Slider indicators={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default YourFood;
