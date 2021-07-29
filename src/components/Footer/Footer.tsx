import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";

const Footer: React.FC = () => {
  const today = new Date();

  return (
    <Row id="footer">
      <p>@ {today.getFullYear()} copyright: Rooftop Academy</p>
    </Row>
  );
};

export default Footer;
