import React from "react";
import "./styles.css";

interface Props {
  errorText: string;
}

const FormError: React.FC<Props> = ({ errorText }) => {
  return <p className="error-message">{errorText}</p>;
};

export default FormError;
