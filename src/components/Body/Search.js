import React, { useState } from "react";
import "./Restaurant.css";

function Search({ handleSearch }) {
  const onChangeHandler = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  return (
    <div className="search-container">
      <div className="s-icon">
        <i className="ri-search-line "></i>
      </div>

      <input
        onChange={onChangeHandler}
        type="search"
        className="inp"
        placeholder="Search a restaurant"
      />
    </div>
  );
}

export default Search;
