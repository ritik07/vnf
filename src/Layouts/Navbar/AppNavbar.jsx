import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";
import Logo from "../../Assets/Logo/logo.svg";
import { isMobile } from "react-device-detect";
import SmoothScrolling from "../../SmoothScrolling/SmoothScrolling";

const AppNavbar = () => {
  //state
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  //toggle function
  const toggle = () => setIsOpen(!isOpen);

  //smooth scrolling to the defined id
  const scrollToTarget = (target) => {
    SmoothScrolling.scrollTo(target);
  };

  const handleOnClickNavItm = (target) => {
    scrollToTarget(target);
    if (target === "home") {
      setIsHomeActive(true);
      setIsWork(false);
      setIsAbout(false);
    } else if (target === "works") {
      setIsHomeActive(false);
      setIsWork(true);
      setIsAbout(false);
    } else if (target === "aboutus") {
      setIsHomeActive(false);
      setIsWork(false);
      setIsAbout(true);
    }
  };

  return (
    <div className="nav-bar-shadow">
      <Container id="home">
        <Navbar color="#fff" light expand="md" sticky={true}>
          <NavbarBrand href="/">
            <img src={Logo} alt="logo-vnf" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-center">
            <Nav className="me-auto" navbar>
              <NavItem className="nav-itm">
                <NavLink
                  className={isHomeActive ? "active" : ""}
                  onClick={() => handleOnClickNavItm("home")}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="nav-itm">
                <NavLink
                  className={isWork ? "active" : ""}
                  onClick={() => handleOnClickNavItm("works")}
                >
                  How It Works
                </NavLink>
              </NavItem>
              <NavItem className="nav-itm">
                <NavLink
                  className={isAbout ? "active" : ""}
                  onClick={() => handleOnClickNavItm("aboutus")}
                >
                  About
                </NavLink>
              </NavItem>
              <a className="nav-btn md-qry-desktop">
                Contact Us
                <span className="fa fa-angle-right"></span>
              </a>
            </Nav>
          </Collapse>
          <a className="nav-btn md-qry-mobile">
            Contact Us
            <span className="fa fa-angle-right"></span>
          </a>
        </Navbar>
      </Container>
    </div>
  );
};

export default AppNavbar;
