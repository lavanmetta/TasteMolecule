import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Restaurants from "./components/Body/Restaurants";
import Carousel from "./components/Body/Carousel";


function App() {
  return (
    <>
      <Header />
      <Carousel/>
      <Restaurants />
      <Footer />
     
    </>
  );
}

export default App;
