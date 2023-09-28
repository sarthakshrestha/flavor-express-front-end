import React from "react";
import "./SmallMealPlan.css";

import Salad from "./images/meal1.png";
import Smoothie from "./images/mango.png";
import AvocadoToast from "./images/momo.png";

export default function SmallMealPlan() {
    const greenMealOptions = [
        { name: "Green Salad", image: Salad },
        { name: "Mango Smoothie", image: Smoothie },
        { name: "Chicken Momo", image: AvocadoToast },
    ];

    return (
        <div className="small_meal_plan_section">
            <div className="title-container">
                <h1 className="meal-title-one"> Explore both <span className="veg">veg</span> and <span className="red-v">non-veg</span> meal plans </h1>
            </div>

            <div className="category_container">
                {greenMealOptions.map((option, index) => (
                    <div className="category_box" key={index}>
                        <div className="category_content">
                            <img src={option.image} alt={`Option ${index + 1}`} />
                            <p>{option.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
