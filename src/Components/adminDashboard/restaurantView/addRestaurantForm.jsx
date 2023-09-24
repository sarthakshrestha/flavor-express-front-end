import React, { useState } from "react";
import "./addRestaurantForm.css";

function AddRestaurantForm({ onAddRestaurant, togglePopup }) {
    const [newRestaurant, setNewRestaurant] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: "",
        description: "",
        image: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewRestaurant({
            ...newRestaurant,
            [name]: value,
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "image/png") {
            setNewRestaurant({
                ...newRestaurant,
                image: file,
            });
        } else {
            alert("Please only upload .png files.");
        }
    };

    const handleAddRestaurant = () => {
        onAddRestaurant(newRestaurant);
        setNewRestaurant({
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            password: "",
            description: "",
            image: null,
        });
        togglePopup();
    };

    return (
        <div className="popup-container">
            <div className="popup-box">
                <form className="popup-form">
                    <span className="close-button" onClick={togglePopup}>
                        &times;
                    </span>
                    <h2>Add New Restaurant</h2>
                    <div className="f1-group">
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
                            className="tel-input"
                            value={newRestaurant.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newRestaurant.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={newRestaurant.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newRestaurant.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Restaurant Image (PNG only):</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept=".png"
                            onChange={handleImageUpload}
                        />
                        <br/>
                        <p><br/>Please only upload .png files.</p>
                    </div>
                    <div className="button-container">
                        <button
                            type="button"
                            className="add-button"
                            onClick={handleAddRestaurant}
                        >
                            Add Restaurant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddRestaurantForm;
