import React from "react";
import "./CustomerReview.css";
import Profile1 from "../images/profile 8.png";
import Profile2 from "../images/profile 9.png";
import Profile3 from "../images/profile 10.png";

export default function CustomerReview() {
  return (
    <div className="customer_review_section">
      <div className="customer_content">
        <h1>Customer Review</h1>
      </div>
      <div className="reviews-container">
        <div className="review">
          <img src={Profile1} alt="Reviewer 1" className="reviewer_picture" />
          <h3>John Doe</h3>
          <div className="rating">★★★★★</div>
          <p>
            "The food was delicious, and the delivery was quick. Highly
            recommended!"
          </p>
        </div>
        <div className="review">
          <img src={Profile2} alt="Reviewer 1" className="reviewer_picture" />
          <h3>Jane Smith</h3>
          <div className="rating">★★★★★</div>
          <p>
            "The app is user-friendly, and I love the 'Top Categories' section.
            It makes finding what I want to order so easy."
          </p>
        </div>
        <div className="review">
          <img src={Profile3} alt="Reviewer 1" className="reviewer_picture" />
          <h3>Michael Johnson</h3>
          <div className="rating">★★★★★</div>
          <p>
            "The 'Meal Plan' feature is a game-changer for me. It saves me time
            and money. Highly convenient!"
          </p>
        </div>
      </div>
    </div>
  );
}
