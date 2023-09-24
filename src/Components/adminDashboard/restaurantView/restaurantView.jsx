import React, { useState } from "react";
import Sidebar from "../sideBar/sideBar";
import "./restaurantView.css";
import AddRestaurantForm from "./addRestaurantForm";

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
        // Close the popup
        togglePopup();
    };

    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar />
                </div>

                <div className="restaurant-info-admin">
                    <div className="table-container">
                        <div className="r-header">
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
                        <button type="button" className="add-button" onClick={togglePopup}>
                            Add Restaurant
                        </button>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-container">
                    <div className="popup-content">
                        <AddRestaurantForm
                            newRestaurant={newRestaurant}
                            handleInputChange={handleInputChange}
                            handleAddRestaurant={handleAddRestaurant}
                            togglePopup={togglePopup}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default AllRestaurants;
