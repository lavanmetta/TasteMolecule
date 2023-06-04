import React, { useState, useEffect } from "react";
import "./details.css";
function RestaurantBanner(props) {
  const [rating, setRating] = useState("");
  const { bannerDetails } = props;
  const {
    name,
    cuisines,
    areaName,
    sla,
    totalRatingsString,
    avgRatingString,
    feeDetails,
  } = bannerDetails?.card?.card?.info || "";

  

  useEffect(() => {
    calculateRatingColor();
  }, [avgRatingString]);

  const calculateRatingColor = () => {
    const parsedAvgRating = parseFloat(avgRatingString);

    if (parsedAvgRating > 0 && parsedAvgRating < 3) {
      setRating("red");
    } else if (parsedAvgRating >= 3 && parsedAvgRating < 4) {
      setRating("orange");
    } else {
      setRating("green");
    }
  };

  return (
    <div className="c1">
      <div className="c2">
        <div className="c3">
          <h1>{name}</h1>
          <p>{cuisines?.join(", ")}</p>
          <p>{areaName + ", " + sla?.lastMileTravelString}</p>
        </div>
        <div className="c4">
          <p className={rating}>
            <i className="ri-star-line"></i>
            {avgRatingString}
          </p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="c5">
        <p>{feeDetails?.message} </p>
      </div>
      <hr className="hr-hr" />
    </div>
  );
}

export default RestaurantBanner;
