import React, {useState} from "react";
import "./addRestaurantForm.css";
import axios from "axios";

function AddRestaurantForm({togglePopup}) {
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

        if (event.target.name === "image") {
            const selectedFile = event.target.files[0];
            console.log(selectedFile)
            setNewRestaurant({...newRestaurant, image: selectedFile})
        } else {
            const {name, value} = event.target;
            setNewRestaurant({
                ...newRestaurant,
                [name]: value,
            });
        }

    };

    const handleAddRestaurant = (event) => {
        event.preventDefault();

        console.log("checking")

        const formData = new FormData();
        formData.append("name", newRestaurant.name);
        formData.append("address", newRestaurant.address);
        formData.append("phoneNumber", newRestaurant.phoneNumber);
        formData.append("email", newRestaurant.email);
        formData.append("password", newRestaurant.password);
        formData.append("description", newRestaurant.description);
        formData.append("image", newRestaurant.image);

        // Create a custom header for the multipart/form-data content type
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        axios.post('http://localhost:8081/restaurants', formData, config)
            .then((response) => {
                console.log('Restaurant created successfully:', response.data);
                // Optionally, you can handle the response or perform other actions after successful creation.
                setNewRestaurant({
                    name: "",
                    address: "",
                    phoneNumber: "",
                    email: "",
                    password: "",
                    description: "",
                    image: null,
                });
            })
            .catch((error) => {
                console.error('Error creating restaurant:', error);
            });
    };

    return (
        <div className="popup-container">
            <div className="popup-box">
                <form className="rc-form-1" onSubmit={handleAddRestaurant}>
                <span className="close-button" onClick={togglePopup}>
                    &times;
                </span>
                    <h2 className="fm-heading">Add New Restaurant</h2>
                    <div className="fm-columns">
                        <div className="fm-column">
                            <div className="fm-group">
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
                            <div className="fm-group">
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
                            <div className="fm-group">
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
                            <div className="fm-group">
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
                            <div className="fm-group">
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
                        </div>
                        <div className="fm-column">
                            <div className="fm-group">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newRestaurant.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="fm-group">
                                <label htmlFor="image">Restaurant Image (PNG only):</label>
                                <div className="file-input-container">
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept=".png"
                                        onChange={handleInputChange}/>
                                </div>
                                <p className="fm-note">Please only upload .png files.</p>
                            </div>
                            <div className="fm-button-container">
                                <button
                                    type="submit"
                                    className="fm-add-button"
                                >
                                    Add Restaurant
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddRestaurantForm;
