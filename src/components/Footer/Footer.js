import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { listOfLinks } from "./Data";
import gp from "../../Assets/images/gp.svg";

const Footer = () => {
  const [useFullLinks, setUseFullLinks] = useState([]);
  const [legalLinks, setLegalLinks] = useState([]);
  const [contactLinks, setContactLinks] = useState([]);

  useEffect(() => {
    const links = listOfLinks();
    setUseFullLinks(links[0]);
    setLegalLinks(links[1]);
    setContactLinks(links[2]);
  }, []);

  

  return (
    <div className="a1">
      <div className="footer">
        <div className="usefull-container">
          <h3>Usefull Links</h3>
          {useFullLinks.map((each) => (
            <Link key={each.id} to={each.link}>
              {each.name}
            </Link>
          ))}
        </div>

        <div className="usefull-container">
          <h3>Legal</h3>
          {legalLinks.map((each) => (
            <Link key={each.id} to={each.link}>
              {each.name}
            </Link>
          ))}
        </div>

        <div className="usefull-container">
          <h3>Contact</h3>
          {contactLinks.map((each) => (
            <Link key={each.id} to={each.link}>
              {each.name}
            </Link>
          ))}
        </div>

        <div>
          <img src={gp} alt="gp" />
        </div>
      </div>
      <hr />
      <div className="author">
        <p>
          <Link
            to="https://www.swiggy.com"
            style={{ color: "coral", margin: "5px" }}
            target="_blank"
          >
            Swiggy clone
          </Link>
          | Made by Lavan Metta
        </p>
      </div>
    </div>
  );
};

export default Footer;
