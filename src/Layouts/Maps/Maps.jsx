import React from "react";
import { Col } from "reactstrap";

const Maps = () => {
  return (
    <Col className="mt-90">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.887896897257!2d72.86533671491249!3d19.11257325578843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8396640ff09%3A0x8a444151e689e2de!2sCiti%20Point!5e0!3m2!1sen!2sin!4v1569490294724!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameborder="0"
        ></iframe>
      </div>
    </Col>
  );
};

export default Maps;
