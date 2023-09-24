import React from "react";
import CustomerSidebar from "../customerSidebar/customerSidebar";
import "./orderHistory.css";

export default function OrderHistory() {
    // Sample order history data
    const orderHistoryData = [
        {
            orderId: "1",
            location: "Delicious Restaurant",
            date: "2023-09-20",
            orderedItems: [
                { name: "Pizza", quantity: 2 },
                { name: "Burger", quantity: 1 },
            ],
        },
        {
            orderId: "2",
            location: "Tasty Cafe",
            date: "2023-09-18",
            orderedItems: [
                { name: "Pasta", quantity: 1 },
                { name: "Salad", quantity: 1 },
            ],
        },
        // Add more order history items here
    ];

    return (
        <>
            <CustomerSidebar />
            <div className="order-history">
                <h1 className="order-history-title">Order History</h1>
                {orderHistoryData.map((order, index) => (
                    <div key={index} className="order-history-item">
                        <div className="order-info">
                            <div className="order-location">{order.location}</div>
                            <div className="order-date">{order.date}</div>
                        </div>
                        <div className="ordered-items">
                            {order.orderedItems.map((item, itemIndex) => (
                                <div key={itemIndex} className="ordered-item">
                                    <span>{item.name}</span>
                                    <span className="item-quantity">x{item.quantity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
