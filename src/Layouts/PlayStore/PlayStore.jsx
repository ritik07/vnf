import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import options from "../../Assets/PlayStore/options.svg";
import GooglePlay from "../../Assets/PlayStore/GooglePlay.svg";
import Nexus from "../../Assets/PlayStore/Nexus.svg";

const PlayStore = () => {
  return (
    <div className="bg-vnf-primary">
      <Container>
        <Row>
          <Col md={7} className="mt-28">
            <p className="f-43 txt-clr-white font-weight-bold">
              See What Everyone is Working On When you Sleep
            </p>
            <Row className="mt-28">
              <div style={{ display: "flex" }}>
                <div className="p-15-lr">
                  <img src={options} alt="info-icon" />
                  <div>
                    <h6 className="mt-28 mb-18 font-weight-bold letter-space-3 txt-clr-white f-12">
                      NEVER RUN OUT OF OPTIONS
                    </h6>
                    <p className="txt-clr-white f-15">
                      100+ vegetables, fruits and exotic produce that can be
                      added to your basket. Price and Quality assurance
                    </p>
                  </div>
                </div>
                <div className="p-15-lr">
                  <img src={options} alt="info-icon" />
                  <div>
                    <h6 className="mt-28 mb-18 font-weight-bold letter-space-3 txt-clr-white f-12">
                      NEVER RUN OUT OF OPTIONS
                    </h6>
                    <p className="txt-clr-white f-15">
                      100+ vegetables, fruits and exotic produce that can be
                      added to your basket. Price and Quality assurance
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-28 ">
                <img src={GooglePlay} alt="Google-Play-icon" />
              </div>
            </Row>
          </Col>
          <Col md={4}>
            <img src={Nexus} className="img-responsive" alt="Nexus" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayStore;
