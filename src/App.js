import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Error from './pages/Error/Error';

function App() {

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const location = useLocation();

  const toggleNavbarVisibility = (isVisible) => {
    setIsNavbarVisible(isVisible);
    setIsFooterVisible(isVisible);
  }


  return (
    <>
      <div className={`app ${location.pathname === '/login' ? 'login-page' : 'homepage'}`}>
        <Navbar  isNavbarVisible={isNavbarVisible}
          toggleNavbarVisibility={toggleNavbarVisibility}/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login setIsNavbarVisible = {setIsNavbarVisible} setIsFooterVisible = {setIsFooterVisible}></Login>}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path = "*" element = {<Error></Error>}></Route>
        </Routes>
      </div>
      <Footer isFooterVisible={isFooterVisible} />
    </>
  );
}

export default App;
