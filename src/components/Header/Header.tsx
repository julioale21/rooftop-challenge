import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkItem } from "../../components";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" id="header" variant="dark">
      <Image className="ms-5" src={logo} width="100px" />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll className="nav">
          <LinkItem classes="fs-6" linkTo="/home" text="Home" />
          <LinkItem classes="fs-6" linkTo="/posts/new" text="Products" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
