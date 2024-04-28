import React from 'react';
import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
