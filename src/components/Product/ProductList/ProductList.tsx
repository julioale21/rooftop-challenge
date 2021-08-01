import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductItem from "../ProductItem";
import Product from "../../../models/Product";
import "./styles.css";

interface Props {
  products: Product[];
  onProductSelected: (product: Product) => void;
}
const ProductList: React.FC<Props> = ({ products, onProductSelected }) => {
  return (
    <Container fluid className="product-list-container">
      <Row className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onProductSelected={(product) => onProductSelected(product)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
