import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";

const Footer: React.FC = () => {
  const today = new Date();

  return (
    <Row id="footer">
      <p>@ {today.getFullYear()} copyright: Rooftop Academy</p>
      <p className="author">
        Solved by <a href="https://github.com/julioale21">@julioRomero</a>
      </p>
    </Row>
  );
};

export default Footer;
