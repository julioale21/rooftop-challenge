import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";

const ProductDetail: React.FC = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/600/300/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/600/300/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/600/300/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

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
