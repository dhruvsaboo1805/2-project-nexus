import React from 'react'
import { database } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      navigate("/");
    })
  }

  return (
    <div>
      homr page
      <button onClick={handleClick}>Log Out</button>
    </div>
  )
}

export default Home
