import React from "react";
import { Col, Image } from "react-bootstrap";
import Product from "../../models/Product";
import { getDiscount, parseCurrency } from "../../utils/currency";
import { isCurrent } from "../../utils/days";
import Discount from "../Discount";
import "./styles.css";

interface Props {
  product: Product;
}
const ProductItemTest: React.FC<Props> = ({ product }) => {
  const today = new Date();
  const hasOffer: Boolean = product.offer !== null;
  const title = product.title.length > 24 ? product.title.substring(0, 20) + "..." : product.title;

  return (
    <Col className="mb-5 position-relative" lg={4} md={6} xl={3} xs={12}>
      <div className="product-card">
        <Image className="product-card-image" src={product.images[0]} width="100%" />
        <div className="product-card-body">
          <p className="text-start m-0 mb-2 fw-bolder">{title}</p>
          <div className="d-flex flex-column align-items-end">
            {hasOffer && isCurrent(today.toString(), product.offer.expires_at) ? (
              <>
                <p className="offer-price m-0">{parseCurrency(Number(product.offer.price))}</p>
                <Discount off={getDiscount(Number(product.price), Number(product.offer.price))} />
              </>
            ) : null}
            <div className="d-flex h-100 align-items-end">
              {hasOffer && <p className="offer-text my-0">Antes </p>}
              <p className={`m-0 ${hasOffer ? "offer" : "price"}`}>
                {parseCurrency(Number(product.price))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductItemTest;
