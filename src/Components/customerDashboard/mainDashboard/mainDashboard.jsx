import React from "react";
import CustomerSidebar from "../customerSidebar/customerSidebar";
import "./mainDashboard.css";

export default function OrderOnTheWay() {
    // Sample order data
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
        (total, product)=> total + parseFloat(),
        0
    );

    return (
        <>
            <CustomerSidebar />
            <div className="order-on-the-way">
                <h1 className="order-title">Your order is on the way!</h1>
                <div className="order-details">
                    <table className="order-table">
                        <tbody>
                        <tr>
                            <th>Order ID:</th>
                            <td>{order.orderId}</td>
                        </tr>
                        <tr>
                            <th>Restaurant:</th>
                            <td>{order.restaurantName}</td>
                        </tr>
                        <tr>
                            <th>Estimated Delivery Time:</th>
                            <td>{order.deliveryTime}</td>
                        </tr>
                        <tr>
                            <th>Delivery Driver:</th>
                            <td>
                                <div>Name: {order.driverName}</div>
                                <div>Phone: {order.driverPhone}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>Ordered Items:</th>
                            <td>
                                <table className="item-table">
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
                            </td>
                        </tr>
                        <tr>
                            <th>Total Price:</th>
                            <td>Rs {totalPrice.toFixed(2)}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="track-order-button">
                        <button className="track-button">Track Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}
