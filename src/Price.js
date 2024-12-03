import React from "react";
import product from "./product";

const Price = () => {
  // Render the product Price 
  return (
    <p className="card-text text-light">
      <strong>$ {product.price.toFixed(2)}</strong>
    </p>
  );
};

export default Price;
