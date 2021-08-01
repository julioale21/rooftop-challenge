import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
//import { images } from "../../utils/carouselImages";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import IState from "../../interfaces/IEstate";

const ProductDetail: React.FC = () => {
  const product = useSelector((state: IState) => state.selectedProduct);
  const images = product.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <Container fluid className="detail-container pt-5">
      <h1 className="text-start ms-5">Nombre del producto</h1>
      <div className="d-flex pt-5">
        <div className="d-flex justify-content-center w-75">
          <div className="w-50 h-25">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showNav={false}
              showPlayButton={false}
            />
          </div>
        </div>
        <div className="w-25">
          <div className="d-flex justify-content-around align-items-center">
            <h1 className="fs-4 text-decoration-line-through">$432</h1>
          </div>

          <h5>otra cosa</h5>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
