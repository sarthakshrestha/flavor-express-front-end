import React from "react";
import logo from "./Logo2.png";
import { Link } from "react-router-dom";
import "./sideBar.css";

export default function CustomerSidebar() {
    return (
        <div>
            {/* <Header /> */}
            <div className="sidebar">
                <h2>Welcome to Admin Dashboard</h2>
                <ul>
                    <li>
                        <Link to="/admin">
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/customers">
                            <i className="fas fa-users"></i> Customers
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/restaurants">
                            <i className="fa-solid fa-utensils"></i> Restaurants
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/drivers">
                            <i className="fa-solid fa-car"></i> Drivers
                        </Link>
                    </li>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <li>
                        <Link to="/">
                            <i className="fa-solid fa-right-from-bracket"></i> Log Out
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

