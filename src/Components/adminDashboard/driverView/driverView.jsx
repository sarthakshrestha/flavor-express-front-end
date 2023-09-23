import React from "react";
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
        // Add more fake restaurants here
    ];

    return (
        <>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar />
                </div>

                <div className="restaurant_info_admin">
                    <div className="admin_header">
                        <h1>Registered Drivers</h1>
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
                        {fakeDrivers.map((drivers) => (
                            <tr key={drivers.id}>
                                <td>{drivers.id}</td>
                                <td>{drivers.name}</td>
                                <td>{drivers.address}</td>
                                <td>{drivers.phoneNumber}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

