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
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import Maps from "../Layouts/Maps/Maps";

const AppController = () => {
  return (
    <div>
      <div className="sticky-navbar">
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
      <Maps />
      <Footer />
    </div>
  );
};

export default AppController;
