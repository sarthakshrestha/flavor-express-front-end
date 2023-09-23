import React, { useState } from "react";
import Sidebar from "../sideBar/sideBar";
import "./restaurantView.css";

function AllRestaurants() {
    // Hardcoded fake restaurant data
    const [restaurants, setRestaurants] = useState([
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
    ]);

    const [newRestaurant, setNewRestaurant] = useState({
        name: "",
        address: "",
        phoneNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewRestaurant({
            ...newRestaurant,
            [name]: value,
        });
    };

    const handleAddRestaurant = () => {
        // Add the new restaurant to the list
        setRestaurants([...restaurants, { id: restaurants.length + 1, ...newRestaurant }]);
        // Clear the form
        setNewRestaurant({ name: "", address: "", phoneNumber: "" });
    };

    return (
        <>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar />
                </div>

                <div className="restaurant_info_admin">
                    <form className="restaurant-form">
                        <h2>Add New Restaurant</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newRestaurant.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={newRestaurant.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="tel-n"
                                value={newRestaurant.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="button" className="add-r" onClick={handleAddRestaurant}>
                            Add Restaurant
                        </button>
                    </form>
                </div>

                <div className="table-container">
                    <div className="r_header">
                        <h1 className="r-title">Registered Restaurants</h1>
                    </div>
                    <table className="r-table">
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
                        {restaurants.map((restaurant) => (
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
