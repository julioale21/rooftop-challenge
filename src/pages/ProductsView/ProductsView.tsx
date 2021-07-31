import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import { Pagination, ProductList, ProductListItemSkeleton, SearchForm } from "../../components";
import usePagination from "../../components/Pagination/usePagination";

const ProductsView: React.FC = () => {
  const dispatch = useDispatch();
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

  return (
    <Container fluid className="mt-5">
      <Container className="pe-5">
        <SearchForm onInputChange={handleChange} />
      </Container>
      {!isLoading ? (
        <>
          <ProductList products={paginatedProducts} />
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
