import React, { useState } from "react";
import "./Restaurant.css";

function Search({ handleSearch }) {
  

  const onChangeHandler = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  return (
    <div className="search-container">
      <input onChange={onChangeHandler} type="search" placeholder="Search a restaurant" />
    </div>
  );
}

export default Search;
