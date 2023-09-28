import React, { useState } from "react";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HeroSection({ onSearch }) {
  let navTo = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (searchQuery === "") {
      // Use toast to display a notification
      toast.error("Please search for a food item.");
    } else {
      navTo(`/foodPage?search=${searchQuery}`);
    }
  };

  return (
      <div className="hero_section">
        <div className="overlay">
          {/* Add ToastContainer here */}
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="header">
            <div className="logo">
              <img src="Logo2.png" alt="Logo" />
            </div>
            <div className="hero-button">
              <button className="button-signup" onClick={() => navTo("/registrationPage")}>
                Sign Up
              </button>
              <button className="button-login" onClick={() => navTo("/loginPage")}>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="t-content">
          <h1 className="heading">Your Cravings, Our Delivery</h1>
          <div className="search_bar">
            <div className="search_input">
              <input
                  type="text"
                  placeholder="Search for Food Items"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="search_button" onClick={handleSearch}>
              Search
            </button>

            {searchQuery === "" && (
                <p className="warning-text"></p>
            )}
          </div>
        </div>
      </div>
  );
}
