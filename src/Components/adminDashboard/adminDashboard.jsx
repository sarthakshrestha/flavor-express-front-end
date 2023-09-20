import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sideBar/sideBar";
import "./adminDashboard.css";

const jsonData = [
    { label: "Number of users registered", value: 42 },
    { label: "Number of orders made", value: 62 },
    { label: "Revenue Made  (in Rs.)", value: 1500 },
    { label: "Active Restaurants", value: 62 },
];

export default function AdminDashboard() {
    return (
        <>
            <div className="center-container">
                <div className="s-view">
                    <Sidebar />
                </div>
                <div className="order-box">
                    {jsonData.map((item, index) => (
                        <div className="innerBox" key={index}>
                            <div className="number">{item.value}</div>
                            <h1 className="numUsers">{item.label}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}