import React, { useEffect, useState } from "react";
import { IMG_URL } from "../../config";
import Shimmer from "../Shimmer";

const RestaurantCard = (props) => {
  const [rating, setRating] = useState("");
  const { cardDetails, lists } = props;
 
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
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
    <div className="restaurant-card">
      {lists.length === 0 ? (
        <Shimmer>
          <img src='' alt='' />
        </Shimmer>
      ) : (
        <img src={IMG_URL + cloudinaryImageId} alt={name} />
      )}

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
  );
};

export default RestaurantCard;
