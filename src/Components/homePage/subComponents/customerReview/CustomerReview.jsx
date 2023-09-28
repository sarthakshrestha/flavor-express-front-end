import React from "react";
import "./CustomerReview.css";
import Profile1 from "../customerReview/reviewProfiles/ram.png";
import Profile2 from "../customerReview/reviewProfiles/sita.png";
import Profile3 from "../customerReview/reviewProfiles/mohan.png";

export default function CustomerReview() {
  return (
    <div className="customer_review_section">
      <div className="customer_content">
        <h1>Customer Review</h1>
      </div>
      <div className="reviews-container">
        <div className="review">
          <img src={Profile1} alt="Reviewer 1" className="reviewer_picture" />
          <h3>Ram Baram Yadav</h3>
          <div className="rating">★★★★★</div>
          <p>
            "The food was tasty, and the delivery was quick. Highly
            recommended!"
          </p>
        </div>
        <div className="review">
          <img src={Profile2} alt="Reviewer 1" className="reviewer_picture" />
          <h3>Sita Khanal</h3>
          <div className="rating">★★★★★</div>
          <p>
            "The app is user-friendly, and I love the 'Top Categories' section.
            It makes finding what I want to order so easy."
          </p>
        </div>
        <div className="review">
          <img src={Profile3} alt="Reviewer 1" className="reviewer_picture" />
          <h3>Mohan Bahadur</h3>
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
