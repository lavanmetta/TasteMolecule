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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Offers</Link>
      </div>
    </div>
  );
};

export default Header;
