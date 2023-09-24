import React from "react";
import ReactDOM from "react-dom";
import CustomerSidebar from "../customerSidebar/customerSidebar";
import "./mainDashboard.css";

export default function OrderOnTheWay() {
    // Sample /*/**/*/order data
    const order = {
        orderId: "12345",
        restaurantName: "Delicious Restaurant",
        deliveryTime: "30 minutes",
        driverName: "John Doe",
        driverPhone: "555-123-4567",
        orderedItems: [
            { name: "Pizza", quantity: 2, price: 12.99 },
            { name: "Burger", quantity: 1, price: 8.49 },
            // Add more ordered items here
        ],
    };

    // Calculate the total price
    const totalPrice = order.orderedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <CustomerSidebar />
            <div className="order-on-the-way">
                <h1 className="order-title">Your order is on the way!</h1>
                <div className="order-details">
                    <div className="order-info">
                        <h2>Order ID:</h2>
                        <p>{order.orderId}</p>
                    </div>
                    <div className="order-info">
                        <h2>Restaurant:</h2>
                        <p>{order.restaurantName}</p>
                    </div>
                    <div className="order-info">
                        <h2>Estimated Delivery Time:</h2>
                        <p>{order.deliveryTime}</p>
                    </div>
                    <div className="driver-info">
                        <h2>Delivery Driver:</h2>
                        <p>Name: {order.driverName}</p>
                        <p>Phone: {order.driverPhone}</p>
                    </div>
                    <div className="order-info">
                        <br/>
                        <h2>Ordered Items:</h2>
                        <br/>
                        <table className="order-table">
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order.orderedItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>Rs {item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="order-info">
                        <h2>Total Price:</h2>
                        <p>Rs {totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <div className="track-order-button">
                    <button className="track-button">Track Order</button>
                </div>
            </div>
        </>
    );
}
