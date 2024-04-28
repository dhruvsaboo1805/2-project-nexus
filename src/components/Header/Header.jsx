import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src="https://www.canva.com/design/DAGDsdboluY/yTeo_jX2h1NQu-qu-oohOw/view" alt="food" className="food-img"/>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
