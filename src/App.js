import React from 'react';
import './App.css';
import Login from './components/Login';
import {Routes , Route} from "react-router-dom"
import Home from "./components/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login></Login>}></Route>
        <Route path = "/home" element = {<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
