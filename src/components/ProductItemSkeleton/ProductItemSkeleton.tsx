import React from "react";
import { Card, Col } from "react-bootstrap";
import SkeletonElement from "../skeletons/SkeletonElement";
import "./styles.css";

const ProductItemSkeleton = () => {
  return (
    <Col className="skeleton-container" lg={3} md={4} xs={11}>
      <Card className="skeleton-card">
        <SkeletonElement type="image" />
        <div className="skeleton-body">
          <div className="d-flex justify-content-center">
            <SkeletonElement type="title" />
          </div>
          <div className="d-flex justify-content-end">
            <div className="w-25 me-2">
              <SkeletonElement type="text" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end pe-2 pb-3">
          <SkeletonElement type="button" />
        </div>
      </Card>
    </Col>
  );
};

export default ProductItemSkeleton;
