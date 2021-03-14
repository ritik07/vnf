import React from "react";
import { Carousel } from "react-bootstrap";
import slideImg1 from "../../Assets/Slider/slide1.jpg";
import slideImg2 from "../../Assets/Slider/slide2.jpg";
import slideImg3 from "../../Assets/Slider/slide3.jpg";

const Slider = ({ isOverlay, indicators, mainCaption, subCaption }) => {
  return (
    <Carousel indicators={indicators}>
      <Carousel.Item>
        <div className={isOverlay}></div>
        <div className="slider-text">
          <div style={{ display: "block" }}>
            <div>
              <h1 className="text-center main-caption">
                {mainCaption}
                <br />
              </h1>
            </div>
            <p className="sub-caption text-center">{subCaption}</p>
          </div>
        </div>
        <img className="d-block w-100" src={slideImg1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <div className={isOverlay}></div>
        <div className="slider-text">
          <div style={{ display: "block" }}>
            <div>
              <h1 className="text-center main-caption">
                {mainCaption}
                <br />
              </h1>
            </div>
            <p className="sub-caption text-center">{subCaption}</p>
          </div>
        </div>
        <img className="d-block w-100" src={slideImg2} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <div className={isOverlay}></div>
        <div className="slider-text">
          <div style={{ display: "block" }}>
            <div>
              <h1 className="text-center main-caption">
                {mainCaption}
                <br />
              </h1>
            </div>
            <p className="sub-caption text-center">{subCaption}</p>
          </div>
        </div>
        <img className="d-block w-100" src={slideImg3} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
