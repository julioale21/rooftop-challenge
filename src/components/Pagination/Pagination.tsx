import React from "react";
import "./styles.css";

interface Props {
  page?: number;
  pageCount: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const Pagination: React.FC<Props> = ({ page = 0, pageCount, handleNext, handlePrev }) => {
  return (
    <div className="d-flex justify-content-center mb-5">
      {page > 0 && pageCount >= page ? (
        <button className="pagination-button" onClick={handlePrev}>
          Prev
        </button>
      ) : null}
      <div className="page">
        <p>{page}</p>
      </div>
      {page < pageCount - 1 ? (
        <button className="pagination-button" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
