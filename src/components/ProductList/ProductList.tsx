import React from "react";
import { Row } from "react-bootstrap";
import { shuffle } from "underscore";
import { ProductItem } from "../../components";
import Product from "../../models/Product";
import "./styles.css";

interface Props {
  products: Product[];
}
const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Row className="product-list">
      {shuffle(products).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ProductList;
