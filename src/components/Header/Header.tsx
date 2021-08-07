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
    <Navbar expand="md" id="header" variant="dark">
      <Image className="ms-5 logo" src={logo} width="80px" onClick={handleClick} />
      <p className="m-0 fw-bold text-white ms-md-4">Rooftop Academy</p>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll className="nav">
          <LinkItem classes="fs-5 fw-bolder " linkTo="/" text="Home" />
          <LinkItem classes="fs-5 fw-bold" linkTo="/products" text="Products" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
