import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../Assets/images/navlogo.png";
import "./Header.css";

const Header = () => {
  const [name, setName] = useState("nav-links1");
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setName("nav-links1");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const onClickBurger = () => {
    setName("nav-links2");
  };

  return (
    <div className="header-container">
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        <h2>TasteMolecule</h2>
      </div>

      <div className="burger">
        <i className="ri-menu-line" onClick={onClickBurger}></i>
      </div>
      <div ref={navLinksRef} className={`nav-links ${name}`}>
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
