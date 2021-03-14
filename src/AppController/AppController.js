import React from "react";
import AppNavbar from "../Layouts/Navbar/AppNavbar";
import Slider from "../Layouts/Slider/Slider";
import About from "../Layouts/About/About";
import YourFood from "../Layouts/YourFood/YourFood";
import PlayStore from "../Layouts/PlayStore/PlayStore";
import Works from "../Layouts/Works/Works";
import AboutUs from "../Layouts/AboutUs/AboutUs";
import OurCustomer from "../Layouts/OurCustomer/OurCustomer";
import QuoteCarousel from "../Layouts/QuoteCarousel/QuoteCarousel";
import OurCrew from "../Layouts/OurCrew/OurCrew";
import Card from "../Layouts/Card/Card";
import OurTeam from "../Layouts/OurTeam/OurTeam";
import Footer from "../Layouts/Footer/Footer";
import { StickyContainer, Sticky } from "react-sticky";

const AppController = () => {
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          backgroundColor: "#fff",
        }}
      >
        <AppNavbar />
      </div>
      <Slider
        isOverlay={"overlay"}
        indicators={false}
        mainCaption={"#freshvnf"}
        subCaption={"Fresh and only the Finest produce on your tables."}
      />
      <About />
      <YourFood />
      <PlayStore />
      <Works />
      <AboutUs />
      <OurCustomer />
      <OurCrew />
      <OurTeam />
      <Footer />
      {/* <QuoteCarousel /> */}
    </div>
  );
};

export default AppController;
