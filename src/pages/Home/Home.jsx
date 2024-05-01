import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Contact from "../../components/ContactUs/Contact";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [category, setCategory] = useState("All");

  const toggleNavbarVisibility = (isVisible) => {
    setIsNavbarVisible(isVisible);
    setIsFooterVisible(isVisible);
  };

  return (
    <>
      <div className="app">
        <Navbar
          isNavbarVisible={isNavbarVisible}
          toggleNavbarVisibility={toggleNavbarVisibility}
        />
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Contact />
      </div>
      <Footer isFooterVisible={isFooterVisible} />
    </>
  );
};

export default Home;
