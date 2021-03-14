import React from "react";
import { Container, Col, Row } from "reactstrap";

const Card = ({ description, name, img }) => {
  return (
    <Col md={4} className="mt-28">
      <div className="card">
        <div className="card-body">
          <div className="p-20">
            <p class="card-text text-left text-black">{description}</p>
          </div>
        </div>
        <div class="avatar">
          <img alt="" src={img} class="img-circle" />
        </div>
        <div class="card-footer">
          <div class="p-20">
            <p class="text-black text-left">{name}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card;
