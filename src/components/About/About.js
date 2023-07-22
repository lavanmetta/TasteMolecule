import React, { useEffect, useState } from "react";
import "./About.css";
import { AboutDataList } from "./Data";
import { imagesList } from "./Data";

function About() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    setData(AboutDataList());
    setImg(imagesList());
  }, []);

  return (
    <div className="about-container">
      <div className="heading-con">
        <h1>About TasteMolecule</h1>
      </div>
      <div className="qoute-container">
        <h1>🙷</h1>
        <p>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
      </div>

      <div className="wts-container">
        <h1>What’s In Store For The Future?</h1>
        <p>
          Swiggy has grand plans to be India’s most loved hyperlocal player. It
          aims to be the most accessible platform on the network - reimagining
          the meaning of convenience in the country through a variety of service
          offerings.
        </p>
      </div>

      <div className="data-container">
        {data.map((each) => (
          <div key={each.number} className="data-box">
            <p>{each.text}</p>
            <h2>{each.number}</h2>
          </div>
        ))}
      </div>

      <div className="images">
        {img.map((each) => (
          <div key={each.id} className="img-container">
            <img src={each.imgUrl} alt={each.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
