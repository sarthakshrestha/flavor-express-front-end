import React from "react";
import "./MealPlan.css";
import {Link} from "react-router-dom";

export default function MealPlan() {
  return (
    <div className="mealplan_section">
      <div className="overlay_plan">
        <div className="mealplan_content">
          <h1>Nourishing Options: Meal Plans & Dietary Preferences</h1>
            <button className="viewmore_button">
                <Link to="/meal-plans" style={{ textDecoration: 'none', color: 'white'}}>
                    View More
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
}
