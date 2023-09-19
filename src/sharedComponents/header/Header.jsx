import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "./Logo2.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="top">
                    <img src={logoImage} alt="logo" className="logo" />
                    <div className="links">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                            <li><NavLink to="/food-items">Food Items</NavLink></li>
                            <li><NavLink to="/meal-plans">Meal Plans</NavLink></li>
                            <li><NavLink to="/offers">Offers</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="user-actions">
                    <NavLink to="/account" className="action-button">Account</NavLink>
                    <NavLink to="/cart" className="action-button">Cart</NavLink>
                </div>
            </nav>
        </header>
    );
}
