import React from "react";
import atul from "../../Assets/Team/atul.jpg";
import vikas from "../../Assets/Team/vikas.png";
import sumit from "../../Assets/Team/sumit.jpg";
import aashish from "../../Assets/Team/aashish.jpg";
import akash from "../../Assets/Team/akash.png";
import Card from "../Card/Card";
import { Container, Col, Row } from "reactstrap";

const OurTeam = () => {
  return (
    <div className="mt-90">
      <Container>
        <Row>
          <Card
            description={
              "“Atul cofounded VnF with a mission to make fresh fruits and vegetables available to everyone directly from farm. Prior to starting VnF, Atul cofounded Edupristine, one of the largest professional training company in India, which was later acquired by Adtalem Global Education (listed on NYSE). Atul is an MBA from IIM Indore, and a B.Tech from IIT Kharagpur. He is an avid traveler and trekking enthusiast.”"
            }
            img={atul}
            name={"Atul"}
          />

          <Card
            description={
              "“Vikas comes with 7 years of hands-on experience bringing his passion for consumer understanding and technology to life at Asian Paints. Prior to Asian Paints, he graduated in Computer Science and Engineering from IIT Madras and MBA (PGDM - Finance and Marketing) from IIM Calcutta. While at Asian Paints, he led the Consumer Engagement (Digital and Marketing Tech) team to build and launch multiple consumer internet products (retail store experience, loyalty, digital and consumer apps).”"
            }
            img={vikas}
            name={"Vikas"}
          />

          <Card
            description={
              "“A lifelong entrepreneur, Sumit brings over 7 years of software industry experience and over 5 years of startup experience to oversee engineering and software development at VnF. His passion for simplicity and innovation shapes every product he builds. Prior to joining VnF, Sumit lead tech teams of several startups like Savvy Investments(an online MF advisory platform), Cogoport, FoodPanda Malaysia . Sumit was the CTO and co-founder of Tubett, a Dublin based NDRC startup and video curation platform.”"
            }
            img={sumit}
            name={"Sumit Rai"}
          />

          <Card
            description={
              "“Vikas comes with 7 years of hands-on experience bringing his passion for consumer understanding and technology to life at Asian Paints. Prior to Asian Paints, he graduated in Computer Science and Engineering from IIT Madras and MBA (PGDM - Finance and Marketing) from IIM Calcutta. While at Asian Paints, he led the Consumer Engagement (Digital and Marketing Tech) team to build and launch multiple consumer internet products (retail store experience, loyalty, digital and consumer apps).”"
            }
            img={aashish}
            name={"Aashish"}
          />

          <Card
            description={
              "   “Akash is originally a farmer from Ahmednagar district. He grew up experiencing first hand all the problems an Indian farmer faces and determined to solve them. He was also a core team member in Truce, a start up which worked towards getting farmers the True Price for their produce Armed with ground level understanding and experience in solving this problem, Akash is leading the farm procurement at VnF”"
            }
            img={akash}
            name={"Akash"}
          />
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
