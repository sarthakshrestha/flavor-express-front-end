import React from "react";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  let navTo = useNavigate();

  return (
    <div className="hero_section">
      <div className="overlay">
        <div className="header">
          <div className="logo">
            <img src="Logo2.png" alt="Logo" />
          </div>
          <div className="buttons">
            <button
              className="button1"
              onClick={() => navTo("/registrationPage")}
            >
              Sign Up
            </button>
            <button className="button2" onClick={() => navTo("/loginPage")}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h1 className="heading">Your Cravings, Our Delivery</h1>
        <div className="search_bar">
          <div className="search_input">
            <span className="search_icon">
              <FaSearch />
            </span>
            <input type="text" placeholder="Search for Restaurants or Items" />
          </div>
          <button className="search_button">Search</button>
        </div>
      </div>
    </div>
  );
}
