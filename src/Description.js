import React from "react";
import product from "./product";

const Description = () => {
  // Render the product description 

  return (
    <p className="card-text text-light text-bold">{product.description}</p>
  );
};

export default Description;
