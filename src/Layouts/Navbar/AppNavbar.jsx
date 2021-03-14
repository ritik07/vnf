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

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="nav-bar-shadow">
      <Container>
        <Navbar color="#fff" light expand="md" sticky={true}>
          <NavbarBrand href="/">
            <img src={Logo} alt="logo-vnf" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-center">
            <Nav className="me-auto" navbar>
              <NavItem className="nav-itm">
                <NavLink className="active">Home</NavLink>
              </NavItem>
              <NavItem className="nav-itm">
                <NavLink>How It Works</NavLink>
              </NavItem>
              <NavItem className="nav-itm">
                <NavLink>About</NavLink>
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
