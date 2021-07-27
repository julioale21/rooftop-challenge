import React from "react";
import { Carousel, Image } from "react-bootstrap";

interface Image {
  url: string;
  name: string;
}

interface Props {
  images: Image[];
}

const CarouselImages: React.FC<Props> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} className="h-25">
          <Image alt={image.name} className="d-block w-100" src={image.url} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImages;
