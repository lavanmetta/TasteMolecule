import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Restaurants from "./components/Body/Restaurants";
import Carousel from "./components/Body/Carousel";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Restaurants />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
