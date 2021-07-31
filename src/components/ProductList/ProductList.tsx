import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductItemTest from "../ProductItem";
import Product from "../../models/Product";
import "./styles.css";

interface Props {
  products: Product[];
}
const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Container fluid className="product-list-container">
      <Row className="product-list">
        {products.map((product) => (
          <ProductItemTest key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
