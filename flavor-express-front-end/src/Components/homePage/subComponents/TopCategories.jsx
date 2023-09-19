import React, { useState } from "react";
import "./TopCategories.css";

import Pizza from "../images/hawaiian-pizza.jpg";
import Burger from "../images/big-tasty-burger.jpg";
import Drinks from "../images/refreshing-drink.jpg";
import Japanese from "../images/fresh-tuna-diet-dinner-salmon.jpg";
import Biryani from "../images/dish-with-rice.jpg";
import Chinese from "../images/delicious-food-black-board.jpg";

export default function TopCategories() {
  const allCategories = [
    { name: "Pizza", image: Pizza },
    { name: "Burger", image: Burger },
    { name: "Drinks", image: Drinks },
    { name: "Japanese", image: Japanese },
    { name: "Biryani", image: Biryani },
    { name: "Chinese", image: Chinese },
  ];

  const [visibleCategories, setVisibleCategories] = useState(
    allCategories.slice(0, 5)
  );
  const [startIndex, setStartIndex] = useState(0);

  const handleLeftButtonClick = () => {
    const newStartIndex = startIndex - 1;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
      setVisibleCategories(
        allCategories.slice(newStartIndex, newStartIndex + 5)
      );
    }
  };

  const handleRightButtonClick = () => {
    const newStartIndex = startIndex + 1;
    if (newStartIndex + 5 <= allCategories.length) {
      setStartIndex(newStartIndex);
      setVisibleCategories(
        allCategories.slice(newStartIndex, newStartIndex + 5)
      );
    }
  };

  return (
    <div className="top_categories_section">
      <h1>Top Categories</h1>

      <div className="category_container">
        <div
          className="scroll_button left-button"
          onClick={handleLeftButtonClick}
        >
          &lt;
        </div>

        {visibleCategories.map((category, index) => (
          <div className="category_box" key={index}>
            <div className="category_content">
              <img src={category.image} alt={`Category ${index + 1}`} />
              <p>{category.name}</p>
            </div>
          </div>
        ))}

        <div
          className="scroll_button right-button"
          onClick={handleRightButtonClick}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}
