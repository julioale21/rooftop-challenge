import React from "react";
import { CarouselImages, ProductList, ProductListItemSkeleton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import banner1 from "../../assets/banner_1.jpg";
import banner2 from "../../assets/banner_2.jpg";
import banner3 from "../../assets/banner_3.jpg";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import { shuffle } from "underscore";
import "./styles.css";

const HomeView = () => {
  const dispatch = useDispatch();

  const products: Product[] = useSelector((state: IState) => state.products);

  const images = [
    { name: "banner1", url: banner1 },
    { name: "banner2", url: banner2 },
    { name: "banner3", url: banner3 },
  ];

  React.useEffect(() => {
    dispatch(fetchProducts(4));
  }, [dispatch]);

  return (
    <div>
      <CarouselImages images={images} />
      <h1 className="home-title">Recent Products</h1>
      {products.length ? (
        <ProductList products={shuffle(products)} />
      ) : (
        <ProductListItemSkeleton quantity={4} />
      )}
    </div>
  );
};

export default HomeView;
