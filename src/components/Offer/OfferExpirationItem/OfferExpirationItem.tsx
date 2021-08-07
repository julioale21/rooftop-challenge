import React from "react";
import "../styles.css";

interface Props {
  name: string;
  value: number;
}
const OfferExpirationItem: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="remaining-item">
      <div className="remaining-item-box">
        <p className="m-0 item-value">{value < 9 ? `0${value}` : value}</p>
      </div>
      <p className="m-0 item-name">{name}</p>
    </div>
  );
};

export default OfferExpirationItem;
