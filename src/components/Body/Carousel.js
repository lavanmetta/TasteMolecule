import React, { useEffect, useState } from "react";
import axios from "axios";
import { CAROUSEL_URL } from "../../config";
import { IMG_CAROUSEL_URL } from "../../config";
import "./Restaurant.css";

function Carousel() {
  const [listOfCarouselItems, setListOfCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCarouselImages();
  }, []);

  const getCarouselImages = async () => {
    try {
      const response = await axios.get(CAROUSEL_URL);
      const cards = response?.data?.data?.cards[0];
      setListOfCarouselItems(cards?.data?.data?.cards);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching carousel images:", error);
    }
  };

  const leftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listOfCarouselItems.length - 1 : prevIndex - 1
    );
  };

  const rightClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % listOfCarouselItems.length
    );
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading carousel images...</p>
      ) : listOfCarouselItems.length > 0 ? (
        <div className="main-carousel">
          <button onClick={leftClick}>
            <i className="ri-arrow-left-line"></i>
          </button>
          <div
            className="carousel"
            style={{ transform: `translateX(-${currentIndex * 5}%)` }}
          >
            {listOfCarouselItems.map((each, index) => (
              <div key={each?.data?.bannerId} className="carousel-item">
                <img src={IMG_CAROUSEL_URL + each?.data?.creativeId} alt="" />
              </div>
            ))}
          </div>
          <button onClick={rightClick}>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      ) : (
        <p>No carousel images found.</p>
      )}
    </div>
  );
}

export default Carousel;
