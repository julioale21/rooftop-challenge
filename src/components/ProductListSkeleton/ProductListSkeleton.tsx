import React from "react";
import { Row } from "react-bootstrap";
import ProductItemSkeleton from "../ProductItemSkeleton/ProductItemSkeleton";
import "./styles.css";

interface Props {
  quantity: number;
}
const ProductListSkeleton: React.FC<Props> = ({ quantity }) => {
  return (
    <Row className="skeleton-list">
      {[...Array(quantity)].map((e, i) => (
        <ProductItemSkeleton key={i} />
      ))}
    </Row>
  );
};

export default ProductListSkeleton;
