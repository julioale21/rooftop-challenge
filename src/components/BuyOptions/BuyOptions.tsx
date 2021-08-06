import React from "react";
import { Image } from "react-bootstrap";
import "./styles.css";

const BuyOptions = () => {
  return (
    <div className="options-container">
      <button className="button button-cart">
        <Image src="https://icongr.am/material/cart-outline.svg?size=20&color=currentColor" />
        <p>Add to cart</p>
      </button>
      <button className="button button-buy">
        <Image src="https://icongr.am/material/cash-multiple.svg?size=20&color=currentColor" />
        <p>Buy now</p>
      </button>
    </div>
  );
};

export default BuyOptions;
