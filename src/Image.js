import React from "react";
import product from "./product";

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top"
      style={{ width: "150px", height: "150px" }}
    />
  );
};

export default Image;
