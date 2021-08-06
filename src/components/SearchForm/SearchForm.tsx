import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";

interface Props {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchForm: React.FC<Props> = ({ onInputChange }) => {
  return (
    <Row className="w-100 d-flex justify-content-end mb-5">
      <Col className="my-1 d-flex justify-content-end" sm={3}>
        <input
          className="search-input"
          placeholder="Search here"
          type="search"
          onChange={onInputChange}
        />
      </Col>
    </Row>
  );
};

export default SearchForm;
