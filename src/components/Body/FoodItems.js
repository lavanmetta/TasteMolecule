import React from "react";
import { DET_IMG_URL } from "../../config";

function FoodItems({ foodItem }) {
  const { name, description, imageId, price } = foodItem?.card?.info;
  const maxLength = 50;

  const truncatedDescription =
   description && description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  return (
    <div>
      <div className="food-item-container">
        <img src={DET_IMG_URL + imageId} alt="no picture" />
        <div>
          <h3>{name}</h3>
          <h5>₹ {Math.floor(price / 100)}/-</h5>
          <p>{truncatedDescription}</p>
        </div>
        <div className="btn-cart">
          <button>
            <i className="ri-add-line"></i>
          </button>
          <h4>0</h4>
          <button>
            <i className="ri-subtract-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItems;
