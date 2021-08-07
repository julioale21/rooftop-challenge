import React from "react";
import OfferExpirationItem from "../OfferExpirationItem";
import "../styles.css";

interface Props {
  days: number;
  hours: number;
  minutes: number;
}
const OfferExpiration: React.FC<Props> = ({ days, hours, minutes }) => {
  return (
    <div className="remaining-offer-container">
      <p className="offer-title">Offer expires in:</p>
      <div className="remaining-items-container">
        <OfferExpirationItem name="Days" value={days} />
        <OfferExpirationItem name="Hours" value={hours} />
        <OfferExpirationItem name="Minutes" value={minutes} />
      </div>
    </div>
  );
};

export default OfferExpiration;
