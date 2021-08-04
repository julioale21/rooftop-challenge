import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { fetchQuestions, sendQuestion } from "../../redux/actions/productsActions";
import { QuestionList, QuestionForm } from "../../components";
import { useToasts } from "react-toast-notifications";
import ImageGallery from "react-image-gallery";
import IState from "../../interfaces/IEstate";
import Question from "../../models/Question";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import { hasCurrentOffer } from "../../utils/product";
import { getRemainingTime } from "../../utils/days";

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const product = useSelector((state: IState) => state.selectedProduct);
  const questions = useSelector((state: IState) => state.questions);

  React.useEffect(() => {
    if (Object.keys(product).length) {
      dispatch(fetchQuestions(product.id));
      if (hasCurrentOffer(product)) {
        const { days, hours, minutes } = getRemainingTime(product.offer.expires_at);

        setRemainingDays(days);
        setRemainingHours(hours);
        setRemainingMinutes(minutes);
      }
    }
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

  const orderedQuestions = questions.sort((a, b) => {
    return new Date(b.sent_at).getTime() - new Date(a.sent_at).getTime();
  });

  const handleSendQuestion = async (question: Question) => {
    try {
      await dispatch(sendQuestion(question));
      addToast("Message successfully sent", { appearance: "success" });
    } catch (error) {
      addToast("Something was wrong", { appearance: "error" });
    }
  };

  return (
    <Container className="detail-container pt-5">
      <h1 className="text-start ms-5">{product.title}</h1>
      <Row>
        <Col md={6} xs={12}>
          <ImageGallery items={images} showNav={false} showPlayButton={false} />
        </Col>
        <Col md={6} xs={12}>
          <div className="d-flex justify-content-around align-items-center">
            <h1 className="fs-4 text-decoration-line-through">$432</h1>
          </div>
          <p>
            Detail: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium similique
            odio dolorum facilis ipsa necessitatibus commodi, nostrum unde corrupti expedita
            consectetur. Beatae odio assumenda adipisci a, nobis eveniet voluptatibus iste!
          </p>

          <p className="m-0">Expira en:</p>
          <p className="d-inline">{remainingDays !== 0 && remainingDays + " days "}</p>
          <p className="d-inline">{remainingHours !== 0 && remainingHours + " hours "}</p>
          <p className="d-inline">{remainingMinutes !== 0 && remainingMinutes + " minutes "}</p>
        </Col>
      </Row>

      <QuestionList questions={orderedQuestions} />
      <QuestionForm onQuestionSent={handleSendQuestion} />
    </Container>
  );
};

export default ProductDetail;
