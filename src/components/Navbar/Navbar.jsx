import React, { useContext, useState , useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { database } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';


const Navbar = ({ isNavbarVisible, toggleNavbarVisibility }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();

  const [menu, setMenu] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = database.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Set isAuthenticated based on whether user exists
    });
    return unsubscribe; // Cleanup function
  }, []);

  const handleClick = () => {
    toggleNavbarVisibility(false);
    if (isAuthenticated) {
      // If user is authenticated, sign out
      signOut(database)
        .then(() => {
          setIsAuthenticated(false); // Set isAuthenticated to false after sign out
          toggleNavbarVisibility(true); 
          navigate("/"); // Navigate to home page after sign out
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    } else {
      // If user is not authenticated, navigate to login page
      navigate("/login");
    }
  }



  return (
    <div className={`navbar ${isNavbarVisible ? "" : "hidden"}`}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          About Us
        </a>
        <a
          href="#Contact-Us"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="search_icon" /> */}
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot"}>
            <p>{totalQuantity}</p>
          </div>
        </div>
        <button onClick={handleClick}>
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
