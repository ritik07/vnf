import React from "react";
import { Col } from "reactstrap";

const FeatureBox = ({ imgSrc, Caption }) => {
  return (
    <Col>
      <span>
        <img src={imgSrc} />
      </span>
      <h3 className="spanCaption">{Caption}</h3>
    </Col>
  );
};

export default FeatureBox;
