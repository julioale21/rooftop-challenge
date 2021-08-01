import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItemSkeleton from "../ProductItemSkeleton/ProductItemSkeleton";
import "./styles.css";

interface Props {
  quantity: number;
}
const ProductListSkeleton: React.FC<Props> = ({ quantity }) => {
  return (
    <Container className="skeleton-list-container">
      <Row className="skeleton-list">
        {[...Array(quantity)].map((e, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductListSkeleton;
