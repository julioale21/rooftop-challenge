import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { fetchQuestions, sendQuestion } from "../../redux/actions/productsActions";
import { QuestionList, QuestionForm } from "../../components";
import ImageGallery from "react-image-gallery";
import IState from "../../interfaces/IEstate";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import Question from "../../models/Question";

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: IState) => state.selectedProduct);
  const questions = useSelector((state: IState) => state.questions);

  React.useEffect(() => {
    if (Object.keys(product).length) {
      dispatch(fetchQuestions(product.id));
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
    const status = await dispatch(sendQuestion(question));

    // eslint-disable-next-line no-console
    console.log(status);
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
          <h5>otra cosa</h5>
        </Col>
      </Row>

      <QuestionList questions={orderedQuestions} />
      <QuestionForm onQuestionSent={handleSendQuestion} />
    </Container>
  );
};

export default ProductDetail;
