import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface Props {
  text: string;
  linkTo: string;
  classes?: string;
}

const LinkItem: React.FC<Props> = ({ classes, linkTo, text }) => {
  return (
    <div className="link-container">
      <Link className={`link-item ${classes}`} to={linkTo}>
        {text}
      </Link>
    </div>
  );
};

export default LinkItem;
