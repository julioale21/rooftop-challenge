import React from "react";
import "./styles.css";

interface Props {
  days: number;
  hours: number;
  minutes: number;
}
const OfferExpiration: React.FC<Props> = ({ days, hours, minutes }) => {
  return (
    <div className="remaining-offer-container">
      <p className="m-0 remainig-offer-text">Offer expires in:</p>
      <div className="remaining-items-container">
        {days !== 0 && (
          <p className="remaining-item">
            <span>{days}</span>days
          </p>
        )}
        {hours !== 0 && (
          <p className="remaining-item">
            <span>{hours}</span>hours
          </p>
        )}
        {minutes !== 0 && (
          <p className="remaining-item">
            <span>{minutes}</span>minutes
          </p>
        )}
      </div>
    </div>
  );
};

export default OfferExpiration;
