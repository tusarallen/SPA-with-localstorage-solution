import { useState } from "react";

import "./App.css";

import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
    } else {
      localStorage.setItem("watchTime", time);
    }
  };

  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
