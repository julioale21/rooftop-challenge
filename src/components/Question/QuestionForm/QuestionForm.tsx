import React from "react";
import { Col, Row, FormGroup, FormControl } from "react-bootstrap";
import { useFormik } from "formik";
import { schema } from "./validationSchema";
import { initialValues } from "./initialValues";
import { FormError } from "../../../components";
import "./styles.css";

const QuestionForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  return (
    <Row className="mt-5">
      <Col className="mx-auto" md={6} xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup className="mt-4">
            <FormControl
              as="textarea"
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
