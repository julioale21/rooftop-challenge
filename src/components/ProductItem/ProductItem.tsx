import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { getDiscount, parseCurrency } from "../../utils/currency";
import { isCurrent } from "../../utils/days";
import Product from "../../models/Product";
import { DiscountCard } from "../../components";
import "./styles.css";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const today = new Date();
  const hasOffer: Boolean = product.offer !== null;

  return (
    <Col className="product-card-container" lg={3} md={4} xs={11}>
      <Card className="proudct-card">
        <Image fluid src={product.images[0]} />
        <div className="product-card-body">
          <h6 className="product-card-title">{product.title}</h6>
          <p className={`product-card-price ${hasOffer ? "offer" : ""}`}>
            {parseCurrency(Number(product.price))}
          </p>
        </div>
        {hasOffer && isCurrent(today.toString(), product.offer.expires_at) ? (
          <DiscountCard
            discount={product.offer.price}
            off={getDiscount(Number(product.price), Number(product.offer.price))}
          />
        ) : null}
        <div className="bottom-item">
          <button>Add to cart</button>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
