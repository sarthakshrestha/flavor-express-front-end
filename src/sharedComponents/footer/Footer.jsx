import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_left">
          <img src="Logo2.png" alt="logo" />
        </div>
        <div className="footer_right">
          <div className="footer_column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Help Center</h3>
            <ul>
              <li>
                <NavLink to="/">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Terms & Condition</NavLink>
              </li>
              <li>
                <NavLink to="/">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Payment Methods</h3>
            <ul>
              <li>
                <NavLink to="/">Esewa</NavLink>
              </li>
              <li>
                <NavLink to="/">Khalti</NavLink>
              </li>
              <li>
                <NavLink to="/">Cash On Delivery</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Staff Services</h3>
            <ul>
              <li>
                <NavLink to="/adminLoginPage">Admin Login</NavLink>
              </li>
              <li>
                <NavLink to="/restaurantLoginPage">Restaurant Login</NavLink>
              </li>
            </ul>
            <div className="social_icons">
              <h3>Connect with Us on:</h3>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="mailto:youremail@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
