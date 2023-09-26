import React from "react";
import ReactDOM from "react-dom";
import DriverSidebar from "./driverSidebar/driverSidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill1, faTruckFast} from "@fortawesome/free-solid-svg-icons";
import "./mainDriver.css";
export default function MainDriverDash() {
    return (
        <>
            <DriverSidebar/>
            <div className="r2-container">
                <div className="dr-square-box">
                    <div className="dr-revenues">
                        <FontAwesomeIcon icon={faMoneyBill1} className="icon-revenue"/>
                        <h3>Revenues</h3>
                        <p>Rs. 23,000</p>
                    </div>
                    <div className="dr-orders">
                        <FontAwesomeIcon icon={faTruckFast} className="icon-orders"/>
                        <h3>Orders Delivered</h3>
                        <p>23</p>
                    </div>
                </div>
                <div className="current-delivery">
                    <h1>Current Delivery to be Made</h1>
                    <br/>
                    <table className="driver-table">
                        <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer Name</th>
                            <th>Delivery Address</th>
                            <th>Estimated Delivery Time</th>
                            <th>Restaurant</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>12345</td>
                            <td>John Doe</td>
                            <td>123 Main St</td>
                            <td>30 minutes</td>
                            <td>Brew Express</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}