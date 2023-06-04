import React, { useEffect, useState } from "react";
import { IMG_URL } from "../../config";

import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const [rating, setRating] = useState("");
  const { cardDetails } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    id,
  } = cardDetails.data.data;

  useEffect(() => {
    calculateRatingColor();
  }, []);

  const calculateRatingColor = () => {
    const parsedAvgRating = parseFloat(avgRating);
    if (parsedAvgRating > 0 && parsedAvgRating < 3) {
      setRating("red");
    } else if (parsedAvgRating >= 3 && parsedAvgRating < 4) {
      setRating("orange");
    } else {
      setRating("green");
    }
  };

  return (
    <>
      <Link to={"/restaurants/" + id}>
        <div className="restaurant-card">
          <img src={IMG_URL + cloudinaryImageId} alt={name} />

          <div className="Name-container">
            <h4>{name}</h4>
            <p>{cuisines?.join(", ")}</p>
          </div>

          <div className="details-container">
            <p className={rating}>
              <i className="ri-star-line"></i> {avgRating}
            </p>
            <p>{slaString}</p>
            <p>{costForTwoString}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RestaurantCard;
