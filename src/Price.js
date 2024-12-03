
import React from "react";
import product from "./product";

const Price = () => {
  return (
    <p className="card-text">
      <strong>${product.price.toFixed(2)}</strong>
    </p>
  );
};

export default Price;
