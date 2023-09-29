import React, {useEffect, useState} from "react";
import Sidebar from "../sideBar/sideBar";
import "./restaurantView.css";
import AddRestaurantForm from "./addRestaurantForm";
import axios from "axios";

function AllRestaurants() {
    const [data, setData] = useState([]);

    const [restaurants, setRestaurants] = useState([]);

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

    useEffect(() => {
        fetchData();
    }, []);

    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
        fetchData()
    };

    // Function to fetch and populate data
    const fetchData = () => {
        axios.get('http://localhost:8081/restaurants')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Function to delete a row
    const deleteRow = (restaurant_id) => {
        // Make a DELETE request to your backend API to delete the record with the given ID
        axios.delete(`http://localhost:8081/restaurants/${restaurant_id}`)
            .then(() => {
                // If successful, re-fetch the data to update the table
                fetchData();
            })
            .catch((error) => {
                console.error(error);
            });
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
                                <th>Email</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((restaurant) => (
                                <tr key={restaurant.restaurant_id}>
                                    <td>{restaurant.restaurant_id}</td>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.address}</td>
                                    <td>{restaurant.phoneNumber}</td>
                                    <td>{restaurant.email}</td>
                                    <td>{restaurant.description}</td>
                                    <td><button className="btn-delete" onClick={() => deleteRow(restaurant.restaurant_id)}>Delete</button></td>
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
