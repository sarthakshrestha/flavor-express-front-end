import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

function RestaurantSidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sidebarLinks = [
        { label: "Dashboard", icon: "tachometer", to: "/restro" },
        { label: "Food Items", icon: "folder", to: "/restro/food" },
        { label: "Edit Restaurant Info", icon: "message-square-detail", to: "/restro/edit" },
        { label: "Orders", icon: "bar-chart-square", to: "/restro/orders" },
    ];

    const changeLink = (index) => {
        setActiveIndex(index);
    };

    const showTooltip = (index) => {
        const tooltip = document.querySelector(`.tooltip[data-tooltip="${index}"]`);
        if (tooltip) {
            tooltip.classList.add("show");
        }
    };

    const hideTooltip = (index) => {
        const tooltip = document.querySelector(`.tooltip[data-tooltip="${index}"]`);
        if (tooltip) {
            tooltip.classList.remove("show");
        }
    };

    return (
        <nav className="sidebar-nav">
            <div className="sidebar-top">
                <h1 className="titleMain">Restaurant Dashboard</h1>
            </div>
            <div className="sidebar-links">
                <ul>
                    {sidebarLinks.map((link, index) => (
                        <li className="tooltip-element" data-tooltip={index} key={index}>
                            <Link
                                to={link.to}
                                className={index === activeIndex ? "active" : ""}
                                data-active={index}
                                onMouseOver={() => showTooltip(index)}
                                onMouseOut={() => hideTooltip(index)}
                            >
                                <div className="icon">
                                    <i className={`bx bx-${link.icon}`}></i>
                                    <i className={`bx bxs-${link.icon}`}></i>
                                </div>
                                <span className="link hide">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-footer">
                <a href="#" className="account tooltip-element" data-tooltip="0">
                    <i className="bx bx-user"></i>
                </a>
                <div className="admin-user tooltip-element" data-tooltip="1">
                    <div className="admin-profile hide">
                        <div className="admin-info">
                            <h1 className="bottom-title">Powered by</h1>
                            <a>Flavor Express</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="log-out">
                <button className="logout-btn">Logout</button>
            </div>
        </nav>
    );
}

export default RestaurantSidebar;
