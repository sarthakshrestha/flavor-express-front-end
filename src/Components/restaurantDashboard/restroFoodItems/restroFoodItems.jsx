import React, { useState } from "react";
import ReactDOM from "react-dom";
import RestaurantSidebar from "../sideBar/sideBar";
import "./restroFoodItems.css";

export default function RestroFood() {
    const [foodItems, setFoodItems] = useState([
        {
            id: 1,
            name: "Pizza",
            description: "Delicious pizza with various toppings.",
            price: 12.99,
            category: "non-veg",
            image: "/path/to/pizza-image.jpg",
        },
        {
            id: 2,
            name: "Burger",
            description: "Classic burger with cheese and vegetables.",
            price: 8.99,
            category: "veg",
            image: "/path/to/burger-image.jpg",
        },
        // Add more food items here
    ]);

    const [showAddFoodPopup, setShowAddFoodPopup] = useState(false);

    const [newFoodItem, setNewFoodItem] = useState({
        name: "",
        description: "",
        price: "",
        category: "non-veg", // Default category
        image: null,
    });

    const toggleAddFoodPopup = () => {
        setShowAddFoodPopup(!showAddFoodPopup);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewFoodItem({ ...newFoodItem, [name]: value });
    };

    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        setNewFoodItem({ ...newFoodItem, image: imageFile });
    };

    const addFoodItem = () => {
        // Add the new food item to the foodItems array
        setFoodItems([...foodItems, newFoodItem]);

        // Clear the form fields
        setNewFoodItem({
            name: "",
            description: "",
            price: "",
            category: "non-veg",
            image: null,
        });

        // Close the popup
        toggleAddFoodPopup();
    };

    return (
        <>
            <RestaurantSidebar />
            <div className="item-container">
                <h2 className="item-heading">Food Items</h2>
                <table className="item-food-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price (Rs.)</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foodItems.map((food) => (
                        <tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.description}</td>
                            <td>{food.price.toFixed(2)}</td>
                            <td>{food.category}</td>
                            <td>
                                {food.image && (
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        width="50"
                                        height="50"
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="item-add-button" onClick={toggleAddFoodPopup}>
                    Add Food Item
                </button>
                {showAddFoodPopup && (
                    <div className="item-add-popup">
                        <form>
                            <h1 className="p-title">Add a new Item to your restaurant<button
                                className="close-button-1"
                                onClick={toggleAddFoodPopup}
                                style={{ fontSize: "25px" }}
                            >
                                &times;
                            </button></h1>

                            <label htmlFor="itemName">Name:</label>
                            <input
                                type="text"
                                id="itemName"
                                name="name"
                                value={newFoodItem.name}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="itemDescription">Description:</label>
                            <textarea
                                id="itemDescription"
                                name="description"
                                value={newFoodItem.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <label htmlFor="itemPrice">Price (Rs.):</label>
                            <input
                                type="number"
                                id="itemPrice"
                                name="price"
                                step="0.01"
                                value={newFoodItem.price}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="itemCategory">Category:</label>
                            <select
                                id="itemCategory"
                                name="category"
                                value={newFoodItem.category}
                                onChange={handleInputChange}
                            >
                                <option value="non-veg">Non-Veg</option>
                                <option value="veg">Veg</option>
                                <option value="drinks">Drinks</option>
                            </select>{''}
                            <label htmlFor="itemImage">Upload Image:</label>
                            <p style={{fontStyle: "italic", fontSize: "16px"}}>Please upload high-res images<br/></p>
                            <input
                                type="file"
                                id="itemImage"
                                name="image"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            <button className="add-2" type="button" onClick={addFoodItem}>
                                Add
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
