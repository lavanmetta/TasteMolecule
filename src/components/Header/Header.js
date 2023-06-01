import React from "react";
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
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
