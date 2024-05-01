import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Error from './pages/Error/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
