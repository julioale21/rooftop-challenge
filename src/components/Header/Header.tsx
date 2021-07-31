import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkItem } from "../../components";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <Navbar expand="md" id="header" variant="light">
      <Image className="ms-5" src={logo} width="100px" />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll className="nav">
          <LinkItem classes="fs-5 text-light fw-bold text-uppercase" linkTo="/" text="Home" />
          <LinkItem
            classes="fs-5 text-light fw-bold text-uppercase"
            linkTo="/products"
            text="Products"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
