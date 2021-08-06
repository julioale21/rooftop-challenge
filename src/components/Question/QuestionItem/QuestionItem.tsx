import React from "react";
import Question from "../../../models/Question";
import { getTimeFromTimeStamp } from "../../../utils/days";
import "./styles.css";

interface Props {
  question: Question;
}

const QuestionItem: React.FC<Props> = ({ question }) => {
  return (
    <div className="question-container" data-aos="fade-up">
      <h6 className="question-customer">{question.customer_name}</h6>
      <p className="question">{question.question}</p>
      <p className="answer">{question.answer}</p>
      <p className="question-date">{getTimeFromTimeStamp(question.sent_at)}</p>
    </div>
  );
};

export default QuestionItem;
