import React from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import "./styles.css";

interface Props {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchForm: React.FC<Props> = ({ onInputChange }) => {
  return (
    <Row className="d-flex justify-content-end mb-5">
      <Col className="my-1" sm={3}>
        <InputGroup>
          <input
            className="search-input"
            placeholder="Search here"
            type="search"
            onChange={onInputChange}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchForm;
