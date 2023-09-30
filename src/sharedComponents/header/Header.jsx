import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "./Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState( // Add a state variable to track login status
        localStorage.getItem("UserData") !== null // Check if user data is present in localStorage
    );

    function handleLogout() {
        // Clear user data from localStorage and update login status
        localStorage.removeItem("FlavorExpressUserToken");
        localStorage.removeItem("UserData");
        setIsLoggedIn(false);
    }

    return (
        <header>
            <nav className="navbar">
                <div className="navtop">
                    <img src={logoImage} alt="logo" className="logo" />
                    <div className="links">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/restaurant">Restaurants</NavLink></li>
                            <li><NavLink to="/foodPage">Food Items</NavLink></li>
                            <li><NavLink to="/meal-plans">Meal Plans</NavLink></li>
                            <li><NavLink to="/diet-plan">Diet Suggestions</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="user-actions">
                    {isLoggedIn ? (
                        <>
                            <div className="accountButton">
                                <NavLink to="/customer" className="action-button">Profile<FontAwesomeIcon className="accIcon" icon={faUser} /></NavLink>
                            </div>
                            <div className="cartButton">
                                <NavLink to="/cart" className="action-button">Cart<FontAwesomeIcon className="cartIcon" icon={faCartShopping} /></NavLink>
                            </div>
                            <div className="logoutButton">
                                <button className="logoutButton" onClick={handleLogout}>
                                    <NavLink to="/" className="action-button"> Logout <FontAwesomeIcon className="logoutIcon" icon={faSignOutAlt} /></NavLink>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="accountButton">
                                <NavLink to="/loginPage" className="action-button">Sign In<FontAwesomeIcon className="accIcon" icon={faUser} /></NavLink>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
