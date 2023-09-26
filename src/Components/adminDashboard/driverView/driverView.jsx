import React, { useState } from "react";
import Sidebar from "../sideBar/sideBar";
import "./driverView.css";

export default function AllDrivers() {
    // Hardcoded fake restaurant data
    const fakeDrivers = [
        {
            id: 1,
            name: "Driver 1",
            address: "123 Main Street",
            phoneNumber: "555-123-4567",
        },
        {
            id: 2,
            name: "Driver 2",
            address: "456 Elm Street",
            phoneNumber: "555-987-6543",
        },
        {
            id: 3,
            name: "Driver 3",
            address: "456 Elm Street",
            phoneNumber: "555-987-6543",
        },
        // Add more fake drivers here
    ];

    // State variable to control the visibility of the add driver popup
    const [showAddDriverPopup, setShowAddDriverPopup] = useState(false);

    // State variables to store driver details
    const [driverName, setDriverName] = useState("");
    const [driverEmail, setDriverEmail] = useState("");
    const [driverPassword, setDriverPassword] = useState("");
    const [driverAddress, setDriverAddress] = useState("");
    const [driverPhoneNumber, setDriverPhoneNumber] = useState("");

    // Function to toggle the add driver popup
    const toggleAddDriverPopup = () => {
        setShowAddDriverPopup(!showAddDriverPopup);
    };

    // Function to handle form submission
    const handleAddDriver = () => {
        // Add code here to save driver details
        console.log("Driver Name:", driverName);
        console.log("Driver Email:", driverEmail);
        console.log("Driver Password:", driverPassword);
        console.log("Driver Address:", driverAddress);
        console.log("Driver Phone Number:", driverPhoneNumber);

        // Clear form fields
        setDriverName("");
        setDriverEmail("");
        setDriverPassword("");
        setDriverAddress("");
        setDriverPhoneNumber("");

        // Close the popup
        toggleAddDriverPopup();
    };

    return (
        <>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar />
                </div>

                <div className="restaurant_info_admin">
                    <div className="admin_header">
                        <h1>Registered Drivers</h1>
                        <button className="add-driver-button" onClick={toggleAddDriverPopup}>
                            Add Driver
                        </button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {fakeDrivers.map((driver) => (
                            <tr key={driver.id}>
                                <td>{driver.id}</td>
                                <td>{driver.name}</td>
                                <td>{driver.address}</td>
                                <td>{driver.phoneNumber}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showAddDriverPopup && (
                <div className="dr-popup">
                    {/* Add Driver Form */}
                    <h2>Add Driver</h2>
                    <form>
                        <label htmlFor="driverName">Driver Name:</label>
                        <input
                            type="text"
                            id="driverName"
                            name="driverName"
                            value={driverName}
                            onChange={(e) => setDriverName(e.target.value)}
                            required
                        />

                        <label htmlFor="driverEmail">Email:</label>
                        <input
                            type="email"
                            id="driverEmail"
                            name="driverEmail"
                            value={driverEmail}
                            onChange={(e) => setDriverEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="driverPassword">Password:</label>
                        <input
                            type="password"
                            id="driverPassword"
                            name="driverPassword"
                            value={driverPassword}
                            onChange={(e) => setDriverPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="driverAddress">Address:</label>
                        <input
                            type="text"
                            id="driverAddress"
                            name="driverAddress"
                            value={driverAddress}
                            onChange={(e) => setDriverAddress(e.target.value)}
                            required
                        />

                        <label htmlFor="driverPhoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="driverPhoneNumber"
                            name="driverPhoneNumber"
                            value={driverPhoneNumber}
                            onChange={(e) => setDriverPhoneNumber(e.target.value)}
                            required
                        />

                        <button className="add-driver-button" type="button" onClick={handleAddDriver}>
                            Add Driver
                        </button>
                    </form>
                    <button className="close-button" onClick={toggleAddDriverPopup}>
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}
