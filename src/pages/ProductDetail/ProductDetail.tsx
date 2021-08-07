import React from "react";
import { BuyOptionsPanel, OfferExpiration, QuestionForm, QuestionList } from "../../components";
import { Container, Col, Row } from "react-bootstrap";
import { hasCurrentOffer } from "../../utils/product";
import { getDiscount, parseCurrency } from "../../utils/currency";
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
          <ImageGallery items={images} showPlayButton={false} />
          {isCurrentOffer && (
            <div className="offer-card">
              <p className="m-0">{getDiscount(Number(product.price), product.offer.price)}% OFF</p>
            </div>
          )}
        </Col>
        <Col md={6} xs={12}>
          <h3 className="detail-title text-start mt-5 mt-md-0">{product.title}</h3>
          <hr />
          <div className="d-flex flex-column flex-lg-row me-2 justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <p
                className={`${isCurrentOffer ? "old-price" : "normal-price"} align-self-end mb-4 `}
              >
                {product.price}
              </p>
              {isCurrentOffer && (
                <p className="new-offer-price">{parseCurrency(product.offer.price)}</p>
              )}
            </div>
            {isCurrentOffer && (
              <div className="w-100 d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-3 me-lg-3">
                <OfferExpiration
                  days={remainingDays}
                  hours={remainingHours}
                  minutes={remainingMinutes}
                />
              </div>
            )}
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium similique odio
            dolorum facilis ipsa necessitatibus commodi, nostrum unde corrupti expedita consectetur.
            Beatae odio assumenda adipisci a, nobis eveniet voluptatibus iste!
          </p>

          <BuyOptionsPanel />
        </Col>
      </Row>

      <QuestionList questions={orderedQuestions} />
      <QuestionForm onQuestionSent={handleSendQuestion} />
    </Container>
  );
};

export default ProductDetail;
