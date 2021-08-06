import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkItem } from "../../components";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <Navbar expand="md" id="header" variant="light">
      <Image className="ms-5" src={logo} width="100px" onClick={handleClick} />
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll className="nav">
          <LinkItem classes="fs-6  fw-bold text-uppercase" linkTo="/" text="Home" />
          <LinkItem classes="fs-6 fw-bold text-uppercase" linkTo="/products" text="Products" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
