import React from "react";
import "./Skeleton.css";

interface Props {
  type: string;
}

const SkeletonElement: React.FC<Props> = ({ type }) => {
  const classes: string = `skeleton ${type}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
