import React from "react";

interface Props {
  page: number;
  pageCount: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const Pagination: React.FC<Props> = () => {
  return <div></div>;
};

export default Pagination;
