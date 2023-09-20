import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";
import logoImage from "./Logo2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="top">
                    <img src={logoImage} alt="logo" className="logo"/>
                    <div className="links">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/restaurant">Restaurants</NavLink></li>
                            <li><NavLink to="/foodPage">Food Items</NavLink></li>
                            <li><NavLink to="/meal-plans">Meal Plans</NavLink></li>
                            <li><NavLink to="/offers">Offers</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="user-actions">
                    <div className="accountButton">

                        <NavLink to="/account" className="action-button">Account<FontAwesomeIcon className="accIcon"
                                                                                                     icon={faUser}/></NavLink>

                    </div>
                    <div className="cartButton">
                        <NavLink to="/cart" className="action-button">Cart<FontAwesomeIcon className="cartIcon" icon={faCartShopping} /></NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}
