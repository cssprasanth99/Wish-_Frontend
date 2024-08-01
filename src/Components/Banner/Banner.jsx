import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Link to="/product">
        <div className="banner">
          <img
            src="https://dp.image-gmkt.com/dp2016/US/GMKT.IMG/mall/2024/05/30/6b877459-792a-4735-99af-4b953e8d0adc.jpg"
            alt="img"
          />
        </div>
      </Link>
    </div>
  );
};

export default Banner;
