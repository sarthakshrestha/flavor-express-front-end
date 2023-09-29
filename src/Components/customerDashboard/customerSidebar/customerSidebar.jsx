import React from "react";
import logo from "./Logo.png";
import { Link } from "react-router-dom";
import "./customerSidebar.css";

export default function CustomerSidebar() {
    return (
        <div>
            {/* <Header /> */}
            <div className="sidebar">
                <h2>Welcome to Your Profile</h2>
                <ul>
                    <li>
                        <Link to="/customer">
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/customer/edit">
                            <i className="fas fa-users"></i> Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/customer/orders">
                            <i className="fas fa-exchange-alt"></i> Order History
                        </Link>
                    </li>
                </ul>
                <div className="cm-logout">
                    <a>Logout </a>
                </div>
                <div className="c-info">
                    <h1 className="bottom-title">Powered by</h1>
                    <p>Flavor Express</p>
                </div>
            </div>


        </div>

    );
}

