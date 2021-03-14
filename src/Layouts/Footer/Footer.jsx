import React from "react";
import { Container, Row, Col } from "reactstrap";
import fevicon from "../../Assets/FavIcon/fevicon.png";
import twitter1 from "../../Assets/Social/twitter1.png";
import facebook1 from "../../Assets/Social/facebook1.png";
import google1 from "../../Assets/Social/google1.png";
import youtube1 from "../../Assets/Social/youtube1.png";
import linkedin1 from "../../Assets/Social/linkedin1.png";

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <div style={{ display: "flex" }}>
            <div className="mr-2">
              <img src={fevicon} alt="fav-icon" />
            </div>
            <div>
              <p>© 2019 Freshvnf. All Rights Reserved</p>
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex" }}>
            <strong>
              <p style={{ color: "#3f51b5" }}>Privacy Policy</p>
            </strong>
            <div className="ml-4">
              <img src={twitter1} alt="twitter1" />
            </div>
            <div className="ml-4">
              <img src={facebook1} alt="facebook1" />
            </div>
            <div className="ml-4">
              <img src={youtube1} alt="youtube1" />
            </div>
            <div className="ml-4">
              <img src={google1} alt="google1" />
            </div>
            <div className="ml-4">
              <img src={linkedin1} alt="linkedin1" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
