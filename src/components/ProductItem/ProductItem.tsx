import React from "react";
import { Col, Image } from "react-bootstrap";
import Product from "../../models/Product";
import { getDiscount, parseCurrency } from "../../utils/currency";
import { hasExpired } from "../../utils/days";
import Discount from "../Discount";
import "./styles.css";

interface Props {
  product: Product;
  onProductSelected: (product: Product) => void;
}
const ProductItem: React.FC<Props> = ({ product, onProductSelected }) => {
  let isCurrentOffer = false;
  const today = new Date();
  const title = product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title;

  if (product.offer !== null && !hasExpired(today.toString(), product.offer.expires_at)) {
    isCurrentOffer = true;
  }

  return (
    <Col className="product-container" lg={4} md={6} xl={3} xs={12}>
      <div className="product-card" onClick={() => onProductSelected(product)}>
        <Image className="product-card-image" src={product.images[0]} width="100%" />
        <div className="product-card-body">
          <p className="product-card-title">{title}</p>
          <div className="product-price-container">
            <div
              className={`normal-price-container ${
                isCurrentOffer ? "justify-content-start" : "justify-content-end"
              }`}
            >
              {isCurrentOffer && <p className="offer-text my-0">Antes </p>}
              <p className={`m-0 ${isCurrentOffer ? "offer" : "price"}`}>
                {parseCurrency(Number(product.price))}
              </p>
            </div>
            {isCurrentOffer && (
              <Discount off={getDiscount(Number(product.price), product.offer.price)} />
            )}
            {isCurrentOffer ? (
              <p className="offer-price">{parseCurrency(product.offer.price)}</p>
            ) : null}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
