import React from "react";
import { QuestionList, QuestionForm, OfferExpiration } from "../../components";
import { Container, Col, Row } from "react-bootstrap";
import { hasCurrentOffer } from "../../utils/product";
import { parseCurrency } from "../../utils/currency";
import useProductDetail from "./useProductDetail";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";

const ProductDetail: React.FC = () => {
  const {
    handleSendQuestion,
    orderedQuestions,
    product,
    remainingDays,
    remainingHours,
    remainingMinutes,
  } = useProductDetail();

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

  const isCurrentOffer = hasCurrentOffer(product);

  return (
    <Container className="detail-container pt-5">
      <Row>
        <Col md={6} xs={12}>
          <ImageGallery items={images} showNav={false} showPlayButton={false} />
        </Col>
        <Col md={6} xs={12}>
          <h3 className="text-start mt-5 mt-md-0">{product.title}</h3>
          <hr />
          <div className="d-flex me-2 justify-content-start align-items-center">
            <p className={`${isCurrentOffer ? "old-price" : "normal-price"} `}>$432</p>
            {isCurrentOffer && (
              <p className="new-offer-price">{parseCurrency(product.offer.price)}</p>
            )}
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium similique odio
            dolorum facilis ipsa necessitatibus commodi, nostrum unde corrupti expedita consectetur.
            Beatae odio assumenda adipisci a, nobis eveniet voluptatibus iste!
          </p>

          {isCurrentOffer && (
            <OfferExpiration
              days={remainingDays}
              hours={remainingHours}
              minutes={remainingMinutes}
            />
          )}
        </Col>
      </Row>

      <QuestionList questions={orderedQuestions} />
      <QuestionForm onQuestionSent={handleSendQuestion} />
    </Container>
  );
};

export default ProductDetail;
