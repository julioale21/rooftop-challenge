import React from "react";
import { Row, Container } from "react-bootstrap";
import { ProductItem } from "../../components";
import Product from "../../models/Product";
import "./styles.css";

interface Props {
  products: Product[];
}
const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Container className="product-list-container">
      <Row className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
