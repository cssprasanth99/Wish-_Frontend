import React from "react";
import arrow_icon from "../Assests/breadcrum_arrow.png";
import "./BreadCrums.css";

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrums;
