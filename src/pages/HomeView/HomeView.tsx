import React from "react";
import { CarouselImages, ProductList, ProductListItemSkeleton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts, setSelectedProduct } from "../../redux/actions/productsActions";
import { shuffle } from "underscore";
import { images } from "../../utils/carouselImages";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import "./styles.css";

const HomeView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products: Product[] = useSelector((state: IState) => state.products);

  React.useEffect(() => {
    dispatch(fetchProducts(4));
  }, [dispatch]);

  const handleSelectedProduct = (product: Product) => {
    dispatch(setSelectedProduct(product));
    history.push(`/products/${product.id}`);
  };

  return (
    <div>
      <CarouselImages images={images} />
      <h1 className="home-title">Recent Products</h1>
      {products.length ? (
        <ProductList products={shuffle(products)} onProductSelected={handleSelectedProduct} />
      ) : (
        <ProductListItemSkeleton quantity={4} />
      )}
    </div>
  );
};

export default HomeView;
