import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DETAILS_URL } from "../../config";
import "./details.css";
import RestaurantBanner from "./RestaurantBanner";
import FoodItems from "./FoodItems";
import { Shimmer } from "../Shimmer/Shimmer.js";

function RestaurantDetails() {
  const { resID } = useParams();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    restaurantDetails();
  }, []);

  const restaurantDetails = async () => {
    try {
      const response = await axios.get(DETAILS_URL + resID);
      const lists = response?.data?.data?.cards;
      console.log(lists)
      setListOfRestaurants(lists);
      const items =
        lists[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
          ?.itemCards || [];
      setFoodItems(items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  

  return (
    <div className="ir-container">
      <RestaurantBanner bannerDetails={listOfRestaurants[0]} />

      {isLoading ? (
        <div className="restaurant-card">
          <div className="list-of-restro">
            <Shimmer />
          </div>
        </div>
      ) : (
        <div className="fim">
          {foodItems.map((item, index) => (
            <FoodItems key={index} foodItem={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantDetails;
