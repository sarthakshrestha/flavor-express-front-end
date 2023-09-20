import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sideBar/sideBar";
import "./adminDashboard.css";

const jsonData = [{label: "Number of users registered", value: 42}, {
    label: "Number of orders made",
    value: 62
}, {label: "Revenue Made  (in Rs.)", value: 1500}, {label: "Active Restaurants", value: 62},];

const ordersData = [{
    orderId: "1",
    customer: "John Doe",
    restaurantName: "Sample Restaurant",
    orderDate: "2023-09-20",
    totalAmount: "$50.00",
    status: "Pending",
}, {
    orderId: "2",
    customer: "Alice Smith",
    restaurantName: "Another Restaurant",
    orderDate: "2023-09-19",
    totalAmount: "$35.00",
    status: "Confirmed",
},];

export default function AdminDashboard() {
    return (<>
            <div className="center-container">
                <div className="s-view">
                    <Sidebar/>
                </div>

                <div className="order-box">
                    <p className="text-header">At <br/> a glance {''}</p>
                    {jsonData.map((item, index) => (<div className="innerBox" key={index}>
                            <div className="number">{item.value}</div>
                            <h1 className="numUsers">{item.label}</h1>
                        </div>))}
                </div>
                <div className="table1">
                    <br/>
                    <h1>Order Table</h1>
                    <br/>
                    <table className="order-table">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Restaurant Name</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ordersData.map((order, index) => (<tr key={index}>
                                <td>{order.orderId}</td>
                                <td>{order.customer}</td>
                                <td>{order.restaurantName}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.totalAmount}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button className="accept-btn" style={{backgroundColor: 'darkgreen', fontFamily: 'DM Sans'}} onClick={() => handleAction("Accept")}>Accept</button>
                                    <span style={{ marginRight: '11px' }}></span>
                                    <button className="reject-btn" style={{backgroundColor: 'red', fontFamily: 'DM Sans'}} onClick={() => handleAction("Reject")}>Reject</button>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>);
}

// Function to handle the action (Accept/Reject)
function handleAction(action) {
    alert(`Order ${action}ed`);
}