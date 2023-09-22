import React from "react";
import logo from "./Logo.png";
import { Link } from "react-router-dom";
import "./customerSidebar.css";

export default function CustomerSidebar() {
    return (
        <div>
            {/* <Header /> */}
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} alt="Logo" />{" "}
                    {/* Replace with the actual path to your logo image */}
                </div>
                <h2>Welcome to User's Dashboard</h2>
                <ul>
                    <li>
                        <Link to="/User">
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/User/Edit">
                            <i className="fas fa-users"></i> Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/User/Transaction">
                            <i className="fas fa-exchange-alt"></i> Order History
                        </Link>
                    </li>
                </ul>
                <div className="c-info">
                    <h1 className="bottom-title">Powered by</h1>
                    <p>Flavor Express</p>
                </div>
            </div>
        </div>
    );
}

