import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = ({isFooterVisible}) => {
  const navigate = useNavigate();
  return (
    <footer className= {`footer ${isFooterVisible ? "" : "hidden"}`} id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_dark} alt="logo" className="brand-logo"/>
          <p>
          Your restaurant's mission or brief description can go here. Let customers know what sets your restaurant apart.
          </p>
          <div className="footer-social-icons">
            <a href="#">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="#">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@Cooking.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Cooking.com</p>
    </footer>
  );
};

export default Footer;
