import React from "react";
import { CarouselImages } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/productsActions";
import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";
import IState from "../interfaces/IEstate";
import Product from "../models/Product";

const HomeView = () => {
  const dispatch = useDispatch();

  const products: Product[] = useSelector((state: IState) => state.products);

  const images = [
    { name: "banner1", url: banner1 },
    { name: "banner2", url: banner2 },
    { name: "banner3", url: banner3 },
  ];

  React.useEffect(() => {
    dispatch(fetchPosts(4));
  }, [dispatch]);

  return (
    <div>
      <CarouselImages images={images} />
      <h1>Home</h1>

      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};

export default HomeView;
