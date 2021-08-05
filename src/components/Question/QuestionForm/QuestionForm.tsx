import React from "react";
import { Col, Row, FormGroup } from "react-bootstrap";
import { useFormik } from "formik";
import { schema } from "./validationSchema";
import { initialValues } from "./initialValues";
import { FormError } from "../../../components";

import Question from "../../../models/Question";
import "./styles.css";

interface Props {
  onQuestionSent: (question: Question) => void;
}

const QuestionForm: React.FC<Props> = ({ onQuestionSent }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const question: Question = {
        customer_name: "julioale21",
        question: values.message,
        sent_at: new Date(),
      };

      onQuestionSent(question);
      resetForm();
    },
  });

  return (
    <Row className="mt-5 w-100">
      <Col className="mx-auto" md={6} xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className="mt-4">
            <textarea
              className="input-message"
              name="message"
              placeholder="Enter your message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.touched.message && formik.errors.message ? (
              <FormError errorText={formik.errors.message} />
            ) : null}
          </FormGroup>

          <button className="send-button" type="submit">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default QuestionForm;
