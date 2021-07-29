import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { parseCurrency } from "../../utils/currency";
import Product from "../../models/Product";
import "./styles.css";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <Col lg={3} md={4} xs={11}>
      <Card className="proudct-card">
        <div className="top-item">
          <h3>asdfasdfas</h3>
        </div>
        <Image fluid src={product.images[0]} />
        <h6 className="product-card-title">{product.title}</h6>
        <p className="product-card-price">{parseCurrency(Number(product.price))}</p>
        <div className="bottom-item">
          <button>Add to cart</button>
        </div>
      </Card>
    </Col>
  );
};

export default ProductItem;
