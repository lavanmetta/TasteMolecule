import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../../Assets/images/navlogo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        <h2>TasteMolecule</h2>
      </div>
      <div className="nav-links">
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
