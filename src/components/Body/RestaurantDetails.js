import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DETAILS_URL } from "../../config";
import "./details.css";
import RestaurantBanner from "./RestaurantBanner";
import FoodItems from "./FoodItems";

function RestaurantDetails() {
  const { resID } = useParams();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    restaurantDetails();
  }, []);

  const restaurantDetails = async () => {
    await axios.get(DETAILS_URL + resID).then((response) => {
      const lists = response?.data?.data?.cards;
      setListOfRestaurants(lists);
    });
  };

  console.log(listOfRestaurants);

  return (
    <div className="ir-container">
      <RestaurantBanner bannerDetails={listOfRestaurants[0]} />
      <FoodItems foodItems={listOfRestaurants} />
    </div>
  );
}

export default RestaurantDetails;
