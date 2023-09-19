import React from "react";
import MyLocationImage from "../images/Location tracking-pana.png";
import OnlineGrocery from "../images/Order food-amico.png";
import OnTheWay from "../images/Delivery-amico.png";

import "./HowWorksSection.css";

export default function HowWorksSection() {
  return (
    <div className="how_it_works_section">
      <div className="how_it_works_content">
        <h1>How It Works</h1>
        <p>Ordering and Enjoying Delicious Food Has Never Been Easier</p>
      </div>
      <div className="how_it_works_steps">
        <div className="step1">
          <img src={MyLocationImage} alt="My Location" />
          <h3>Choose Location</h3>
          <p> Enter your address, and we'll find local restaurants nearby.</p>
        </div>

        <div className="step2">
          <img src={OnlineGrocery} alt="My Location" />
          <h3>Order Favourite Food</h3>
          <p> Pick your dishes and customize your order to your liking.</p>
        </div>

        <div className="step3">
          <img src={OnTheWay} alt="My Location" />
          <h3>Fast Delivery</h3>
          <p> Get it delivered right to your door in 1 hour or less.</p>
        </div>
      </div>
    </div>
  );
}
