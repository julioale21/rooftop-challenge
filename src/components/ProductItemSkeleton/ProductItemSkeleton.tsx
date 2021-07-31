import React from "react";
import { Card, Col } from "react-bootstrap";
import SkeletonElement from "../skeletons/SkeletonElement";
import "./styles.css";

const ProductItemSkeleton = () => {
  return (
    <Col className="skeleton-container" lg={4} md={6} xl={3} xs={11}>
      <Card className="skeleton-card">
        <SkeletonElement type="image" />
        <div className="d-flex justify-content-start ps-2">
          <SkeletonElement type="title" />
        </div>
        <div className="d-flex justify-content-end pe-2 pb-3">
          <SkeletonElement type="button" />
        </div>
      </Card>
    </Col>
  );
};

export default ProductItemSkeleton;
