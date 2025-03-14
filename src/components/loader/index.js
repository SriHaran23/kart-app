import React from "react";
import './style.css';

const CartLoader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center ">
      <div className="position-relative ">
        <div className="position-relative cart-bucket">
          <div className="handle"></div>
          <div className="position-relative">
            <div className="trapezoid"></div>
            <div className="trapezoid1">
              <span className="lines"></span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="wheels d-flex justify-content-between gap-1">
            <div className="spinner fs-6"></div>
            <div className="spinner fs-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLoader;
