import React from "react";

const ProductCard = ({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="m-4 p-4 border border-solid border-black">
      <img className="h-48 w-56 object-contain" alt={title} src={thumbnail} />
      <h1 className="p-2 font-bold text-xl w-56">{title}</h1>
      <h2 className="p-1 text-lg w-56">
        Rs. {price} - Discount of {discountPercentage}%
      </h2>
      <p className="p-1 w-56">{description}</p>
    </div>
  );
};

export default ProductCard;
