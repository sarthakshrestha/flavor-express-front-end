import React from "react";
import ReactDOM from "react-dom";
import RestaurantSidebar from "./sideBar/sideBar";
import "./restaurantDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1, faTruckFast } from "@fortawesome/free-solid-svg-icons";

// Sample recent orders data in JSON format
const recentOrdersData = [
    {
        id: 1,
        orderNumber: "RC-12345",
        customerName: "John Doe",
        totalAmount: 2500,
        date: "2023-09-20",
    },
    {
        id: 2,
        orderNumber: "RC-12346",
        customerName: "Jane Smith",
        totalAmount: 1800,
        date: "2023-09-21",
    },
    // Add more orders here
];

export default function RestaurantDashboard() {
    // Select the most recent 5 orders
    const recentOrders = recentOrdersData.slice(0, 5);

    return (
        <>
            <RestaurantSidebar />
            <div className="r1-container">
                <div className="rc-square-box">
                    <div className="rc-revenues">
                        <FontAwesomeIcon icon={faMoneyBill1} className="icon-revenue" />
                        <h3>Revenues</h3>
                        <p>Rs. 23,000</p>
                    </div>
                    <div className="rc-orders">
                        <FontAwesomeIcon icon={faTruckFast} className="icon-orders" />
                        <h3>Orders</h3>
                        <p>500</p>
                    </div>
                </div>

                <div className="rc-recent-orders">
                    <h2>Recent Orders</h2>
                    <table className="recent-orders-table">
                        <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer Name</th>
                            <th>Total Amount</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.orderNumber}</td>
                                <td>{order.customerName}</td>
                                <td>{`Rs. ${order.totalAmount}`}</td>
                                <td>{order.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
