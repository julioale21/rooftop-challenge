import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { fetchQuestions } from "../../redux/actions/productsActions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import IState from "../../interfaces/IEstate";

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: IState) => state.selectedProduct);
  const questions = useSelector((state: IState) => state.questions);

  React.useEffect(() => {
    dispatch(fetchQuestions(product.id));
  }, [dispatch, product]);

  if (!Object.keys(product).length) {
    return (
      <div className="detail-container d-flex align-items-center justify-content-center">
        <h3>No product selected</h3>
      </div>
    );
  }

  const images = product.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <Container fluid className="detail-container pt-5">
      <h1 className="text-start ms-5">{product.title}</h1>
      <Row>
        <Col md={6} xs={12}>
          <ImageGallery items={images} showNav={false} showPlayButton={false} />
        </Col>
        <Col md={6} xs={12}>
          <div className="d-flex justify-content-around align-items-center">
            <h1 className="fs-4 text-decoration-line-through">$432</h1>
          </div>
          <h5>otra cosa</h5>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1>form queries</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
