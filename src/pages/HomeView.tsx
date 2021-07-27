import React from "react";
import { CarouselImages } from "../components";

const HomeView = () => {
  const images = [
    { name: "dog", url: "https://picsum.photos/id/237/1200/300" },
    { name: "dfas", url: "https://picsum.photos/seed/picsum/1200/300" },
  ];

  return (
    <div>
      <CarouselImages images={images} />
      <h1>Home</h1>
    </div>
  );
};

export default HomeView;
