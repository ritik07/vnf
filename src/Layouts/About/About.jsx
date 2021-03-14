import React from "react";
import { Container, Row, Col } from "reactstrap";
import consistenly from "../../Assets/Features/consistenly.svg";
import obessive from "../../Assets/Features/obessive.svg";
import profits from "../../Assets/Features/profits.svg";
import FeatureBox from "./FeatureBox";
import Heading from "../Heading/Heading";
const About = () => {
  return (
    <>
      <Heading
        heading={"About Our Services"}
        subText={
          "VnF is precision agriculture platform that leverages data to pick the finest produce from the best partners and deliver it to your doorstep. We monitor every stage of the Farm-to-Fork cycle to derive synergies for our customers and partner ecosystem"
        }
      />
      <Container className="text-center">
        <Row className="mt-75">
          <FeatureBox
            Caption={"CONSISTENLY PREMIUM QUALITY"}
            imgSrc={consistenly}
          />
          <FeatureBox
            Caption={"OBSESSIVE CUSTOMER SERVICE"}
            imgSrc={obessive}
          />
          <FeatureBox
            Caption={"CREATE PROFITS AND PROSPERITY"}
            imgSrc={profits}
          />
        </Row>
      </Container>
    </>
  );
};

export default About;
