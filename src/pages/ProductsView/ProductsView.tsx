import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Pagination, ProductList, ProductListItemSkeleton, SearchForm } from "../../components";
import { fetchProducts, setSelectedProduct } from "../../redux/actions/productsActions";
import { Container } from "react-bootstrap";
import usePagination from "../../components/Pagination/usePagination";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";

const ProductsView: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products: Product[] = useSelector((state: IState) => state.products);
  const isLoading: boolean = useSelector((state: IState) => state.isLoading);

  const { paginatedProducts, currentPage, pageCount, filterValues, setNextPage, setPrevPage } =
    usePagination(products);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterValues(e.target.value);
  };

  const handleSelectedProduct = (product: Product) => {
    dispatch(setSelectedProduct(product));
    history.push(`/products/${product.id}`);
  };

  return (
    <Container fluid className="mt-5">
      <Container className="pe-5">
        <SearchForm onInputChange={handleChange} />
      </Container>
      {!isLoading ? (
        <>
          <ProductList
            products={paginatedProducts}
            onProductSelected={(product) => handleSelectedProduct(product)}
          />
          <Pagination
            handleNext={setNextPage}
            handlePrev={setPrevPage}
            page={currentPage}
            pageCount={pageCount}
          />
        </>
      ) : (
        <ProductListItemSkeleton quantity={10} />
      )}
    </Container>
  );
};

export default ProductsView;
