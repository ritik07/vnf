import React from "react";
import { Container, Row, Col } from "reactstrap";
import rightBrocli from "../../Assets/Works/rightBrocli.jpg";
const Works = () => {
  return (
    <div className="container-fluid mt-90">
      <Row>
        <Col md={8} style={{ offset: 1 }}>
          <p class="mt-75 ml-50  primary-txt-color font-weight-bold f-50">
            How It Works
          </p>
          <ul class="listStyle">
            <li>
              <span class="count">1</span>Use app on your phone to place the
              order
            </li>
            <li>
              <span class="count">2</span>Sleep tight while we notify our
              partners and experts to pick the finest
            </li>
            <li>
              <span class="count-last">3</span>Get your order delivered first
              thing in morning
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <img src={rightBrocli} className="rightAttachImg" alt="rightBrocli" />
        </Col>
      </Row>
    </div>
  );
};

export default Works;
