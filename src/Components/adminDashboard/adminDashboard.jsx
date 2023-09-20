import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sideBar/sideBar";
import "./adminDashboard.css";

export default function adminDashboard() {
    return (<>
            <div className="center-container">
                <div className="s-view">
                    <Sidebar/>
                </div>
                <div className="order-box">
                    <div className="innerBox">
                        <h1>Number of users</h1>
                        <div className="number">
                            42
                        </div>
                        <div className="order-title">
                            <div className="order-table">
                                Orders
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>);
}