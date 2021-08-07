import React from "react";
import "./styles.css";

interface Props {
  off: number;
}
const Discount: React.FC<Props> = ({ off }) => {
  return (
    <div className="discount-container">
      <p>{off} % OFF</p>
    </div>
  );
};

export default Discount;
