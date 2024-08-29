import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "../ShimmerUI/Shimmer";

const LOAD_LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setShowShimmer(true);
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LOAD_LIMIT}&skip=${
        currentPage * LOAD_LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const jsonData = await data.json();
    setShowShimmer(false);
    setProducts(jsonData.products);
    setNoOfPages(Math.ceil(jsonData.total / LOAD_LIMIT));
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {showShimmer ? (
          <Shimmer />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
      <div className="p-10 cursor-pointer text-center">
        {currentPage > 0 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "text-xl p-4 " + (pN === currentPage && "font-bold underline")
            }
            key={pN}
            onClick={() => {
              setCurrentPage(pN);
            }}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
