import React from "react";
import "./PreferredRestaurants.css";
import Restaurant1 from "../../images/abhishek-sanwa-limbu-5Q-7kgG7xbo-unsplash.jpg";
import Restaurant2 from "../../images/abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg";
import Restaurant3 from "../../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import Restaurant4 from "../../images/abhishek-sanwa-limbu-TiWT_OQ6dnA-unsplash.jpg";
import Restaurant5 from "../../images/sk-uVPV_nV17Tw-unsplash.jpg";
import Restaurant6 from "../../images/shardar-tarikul-islam-YPLcEMcEqaA-unsplash.jpg";
import {Link} from "react-router-dom";
export default function PreferredRestaurants() {
  return (
    <div className="preferred_section">
      <div className="preferred_content">
        <h1>Featured Restaurants</h1>
        <div className="restaurant_list">
          <div className="restaurant-row">
            <div className="restaurant">
              <img src={Restaurant1} alt="restaurant 1" />
              <p>Dal Bhat Power Restro</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant2} alt="restaurant 2" />
              <p>Momo Fiesta</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant3} alt="restaurant 3" />
              <p>Pizzeria</p>
            </div>
          </div>
          <div className="restaurant-row">
            <div className="restaurant">
              <img src={Restaurant4} alt="restaurant 4" />
              <p>Chicken Haven</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant5} alt="restaurant 5" />
              <p>Burgers-R-Healthy</p>
            </div>
            <div className="restaurant">
              <img src={Restaurant6} alt="restaurant 6" />
              <p>WingPress</p>
            </div>
          </div>
        </div>
        <button className="viewmore">
          <Link to="/restaurant" style={{ textDecoration: 'none', color: 'white'}}>
            View More
          </Link>
        </button>
      </div>
    </div>
  );
}
