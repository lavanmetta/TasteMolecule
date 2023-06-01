import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import RestaurantCard from "./RestaurantCard";
import "./Restaurant.css";


const Restaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    await axios.get(API_URL).then((response) => {
      const cards = response?.data?.data?.cards;
      setRestaurantsList(cards);
      setIsLoading(false);
    });
  };

  console.log(restaurantsList);

  return (
    <div className="list-of-restro">
      {restaurantsList.map((each) => (
        <RestaurantCard
          key={uuidv4()}
          cardDetails={each}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default Restaurants;
