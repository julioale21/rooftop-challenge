import React from "react";
import Question from "../../../models/Question";
import { QuestionItem } from "../../../components";
import { Row } from "react-bootstrap";

interface Props {
  questions: Question[];
}

const QuestionList: React.FC<Props> = ({ questions }) => {
  return (
    <Row xs={12}>
      <h1>Questions</h1>
      {questions.map((question, index) => (
        <QuestionItem key={index} question={question} />
      ))}
    </Row>
  );
};

export default QuestionList;
