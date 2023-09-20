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
                        <div className="number">
                            42
                            <br/>
                        </div>
                        <h1 className="numUsers">Number of users</h1>
                    </div>
                </div>
            </div>
        </>);
}