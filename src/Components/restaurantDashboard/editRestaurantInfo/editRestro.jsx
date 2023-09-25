import React, { useState } from "react";
import RestaurantSidebar from "../sideBar/sideBar";
import "./editRestro.css";

export default function EditRestro() {
    // State variables to store the form data
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [restaurantImage, setRestaurantImage] = useState(null);

    // Function to handle form submission
    const handleUpdate = () => {
        // Perform the update action here with the form data
        console.log("Name:", name);
        console.log("Address:", address);
        console.log("Description:", description);
        console.log("Restaurant Image:", restaurantImage);
    };

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        setRestaurantImage(imageFile);
    };

    return (
        <>
            <div className="restro-container">
                <div className="ed-restro-edit-restaurant">
                    <h2>Edit Restaurant Information</h2>
                    <form className="e-form">
                        {/* Name */}
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        {/* Address */}
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                        {/* Description */}
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>

                        {/* Restaurant Image */}
                        <label htmlFor="restaurantImage">Restaurant Image:</label>
                        <input
                            type="file"
                            id="restaurantImage"
                            name="restaurantImage"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />

                        {/* Update Button */}
                        <button
                            className="ed-restro-update-button"
                            type="button"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    </form>
                </div>
                <div className="restrobar">
                <RestaurantSidebar />
                </div>
            </div>
        </>
    );
}
