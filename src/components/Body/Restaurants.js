import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../../config";
import RestaurantCard from "./RestaurantCard";
import "./Restaurant.css";
import Search from "./Search";
import Shimmer from "../Shimmer.js";

const Restaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    try {
      const response = await axios.get(API_URL);
      const cards = response?.data?.data?.cards;
      setRestaurantsList(cards);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleSearch = (searchText) => {
    setFilterText(searchText.toLowerCase());
  };

  const filteredRestaurants = filterText
    ? restaurantsList.filter((restaurant) =>
        restaurant?.data?.data?.name.toLowerCase().includes(filterText)
      )
    : restaurantsList;

  return (
    <div>
      <Search handleSearch={handleSearch} />

      <div className="list-of-restro">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={uuidv4()}
            cardDetails={restaurant}
            isLoading={isLoading}
            lists={restaurantsList}
          />
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="no-restaurants">
          <h2>No restaurants found</h2>
        </div>
      )}
    </div>
  );
};

export default Restaurants;