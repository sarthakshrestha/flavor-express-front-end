import React from "react";
import Sidebar from "../sideBar/sideBar";
import "./restaurantView.css";

function AllRestaurants() {
    // Hardcoded fake restaurant data
    const fakeRestaurants = [
        {
            id: 1,
            name: "Restaurant 1",
            address: "123 Main Street",
            phoneNumber: "555-123-4567",
        },
        {
            id: 2,
            name: "Restaurant 2",
            address: "456 Elm Street",
            phoneNumber: "555-987-6543",
        },
        {
            id: 3,
            name: "Restaurant 3",
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
                        <h1>Registered Restaurants</h1>
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
                        {fakeRestaurants.map((restaurant) => (
                            <tr key={restaurant.id}>
                                <td>{restaurant.id}</td>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.phoneNumber}</td>
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

export default AllRestaurants;
