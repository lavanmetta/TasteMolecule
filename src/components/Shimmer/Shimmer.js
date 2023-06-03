import React from "react";
import "./Shimmer.css";

export const Shimmer = () => {
  return (
    <>
      {Array(16)
        .fill("")
        .map((e, index) => (
          <div className="shimmer" key={index}>
            <div className="shimmer-container"></div>
          </div>
        ))}
    </>
  );
};

export const CarouselShimmer = () => {
  return (
    <div className="shimmer">
      <div className="c-shimmer-container"></div>
    </div>
  );
};
