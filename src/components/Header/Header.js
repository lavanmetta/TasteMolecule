import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../Assets/images/navlogo.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        <h2>TasteMolecule</h2>
      </div>

      <div className="burger">
        <i
          className={isOpen ? "ri-menu-unfold-fill" : "ri-menu-line"}
          onClick={onClickBurger}
        ></i>
      </div>
      <div className={`nav-links ${isOpen ? "nav-links2" : "nav-links1"}`}>
        <Link to="/">
          <i className="ri-gift-2-line"></i>Offers
        </Link>
        <Link to="/">
          <i className="ri-home-heart-line"></i>Home
        </Link>
        <Link to="/about">
          <i className="ri-award-line"></i>About
        </Link>
        <Link to="/">
          <i className="ri-customer-service-2-line"></i>Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
