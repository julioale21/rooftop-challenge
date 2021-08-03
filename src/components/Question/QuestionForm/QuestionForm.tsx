import React from "react";
import { Col, Row } from "react-bootstrap";

const QuestionForm = () => {
  return (
    <Row className="mt-5">
      <Col className="mx-auto" md={6} xs={12}>
        <form>
          <input type="text" />
          <button>Send</button>
        </form>
      </Col>
    </Row>
  );
};

export default QuestionForm;
