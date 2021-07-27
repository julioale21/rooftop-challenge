import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkItem } from "../../components";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" id="header" variant="dark">
      <Image className="ms-5" src="http://setuc.tech/images/logo_white.svg" width="100px" />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll className="nav">
          <LinkItem classes="fs-6" linkTo="/home" text="Home" />
          <LinkItem classes="fs-6" linkTo="/posts/new" text="New Post" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
