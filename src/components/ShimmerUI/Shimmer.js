import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((item, idx) => (
      <div key={idx} className="p-5 m-5 border border-black rounded-lg">
        <div className="w-52 h-52 bg-gray-200"></div>
      </div>
    ));
};

export default Shimmer;
