import React from "react";
import { Image } from "react-bootstrap";
import { parseCurrency } from "../../utils/currency";
import "./styles.css";

interface Props {
  discount: number;
  off: number;
}

const DiscountCard: React.FC<Props> = ({ discount, off }) => {
  return (
    <div className="discount-container">
      <div className="discount-card">
        <p className="m-0"> -{off}%</p>
        <Image src="https://icongr.am/fontawesome/tag.svg?size=5&color=fd8c35" width={20} />
      </div>
      <p className="discount-price">{parseCurrency(Number(discount))}</p>
    </div>
  );
};

export default DiscountCard;
