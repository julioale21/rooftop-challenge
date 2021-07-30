import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import { ProductList } from "../../components";

const ProductsView: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products: Product[] = useSelector((state: IState) => state.products);

  return (
    <Container fluid>
      <h2 className="text-center fw-bold fs-1 mt-5">Products List</h2>
      <ProductList products={products} />
    </Container>
  );
};

export default ProductsView;