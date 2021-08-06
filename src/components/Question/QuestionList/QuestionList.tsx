import React from "react";
import Question from "../../../models/Question";
import { QuestionItem } from "../../../components";
import { Row } from "react-bootstrap";

interface Props {
  questions: Question[];
}

const QuestionList: React.FC<Props> = ({ questions }) => {
  return (
    <Row className="mt-5 px-3 px-md-0" xs={12}>
      <h3 className="my-5 text-start">Questions ({questions.length}):</h3>
      {questions.map((question, index) => (
        <QuestionItem key={index} question={question} />
      ))}
    </Row>
  );
};

export default QuestionList;
