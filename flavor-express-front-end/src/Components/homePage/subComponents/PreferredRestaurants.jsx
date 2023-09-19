import React from "react";
import "./PreferredRestaurants.css";
import Restaurant1 from "../images/abhishek-sanwa-limbu-5Q-7kgG7xbo-unsplash.jpg";
import Restaurant2 from "../images/abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg";
import Restaurant3 from "../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import Restaurant4 from "../images/abhishek-sanwa-limbu-TiWT_OQ6dnA-unsplash.jpg";
import Restaurant5 from "../images/sk-uVPV_nV17Tw-unsplash.jpg";
import Restaurant6 from "../images/shardar-tarikul-islam-YPLcEMcEqaA-unsplash.jpg";
export default function PreferredRestaurants() {
  return (
    <div className="preferred_section">
      <div className="preferred_content">
        <h1>Preferred Restaurants</h1>
        <div className="restaurant_list">
          <div className="restaurant-row">
            <div className="restaurant">
              <img src={Restaurant1} alt="restaurant 1" />
              <p>Restaurant 1</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant2} alt="restaurant 2" />
              <p>Restaurant 2</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant3} alt="restaurant 3" />
              <p>Restaurant 3</p>
            </div>
          </div>
          <div className="restaurant-row">
            <div className="restaurant">
              <img src={Restaurant4} alt="restaurant 4" />
              <p>Restaurant 4</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant5} alt="restaurant 5" />
              <p>Restaurant 5</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant6} alt="restaurant 6" />
              <p>Restaurant 6</p>
            </div>
          </div>
        </div>
        <button className="view_more_button">View More</button>
      </div>
    </div>
  );
}
