import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import RestaurantSidebar from "../sideBar/sideBar";
import "./restroFoodItems.css";
import axios from "axios";

export default function RestroFood() {
    const [foodItems, setFoodItems] = useState([
        {
            food_id: 1,
            name: "Pizza",
            description: "Delicious pizza with various toppings.",
            price: 12.99,
            category: "non-veg",
            image: "/path/to/pizza-image.jpg",
        },
        {
            food_id: 2,
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
        id: 0,
        name: "",
        description: "",
        price: "",
        category: "non-veg",
        image: null,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fat: 0,
        calories: 0,
        allergy: "",
    });

    const toggleAddFoodPopup = () => {
        setShowAddFoodPopup(!showAddFoodPopup);
    };

    const handleInputChange = (event) => {
        if (event.target.name === "image") {
            const selectedFile = event.target.files[0];
            console.log(selectedFile)
            setNewFoodItem({ ...newFoodItem, image: selectedFile });
        } else {
            const { name, value } = event.target;
            setNewFoodItem({
                ...newFoodItem,
                [name]: value,
            });
        }
    };

    const addFoodItem = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", newFoodItem.name);
        formData.append("description", newFoodItem.description);
        formData.append("price", newFoodItem.price);
        formData.append("allergy", newFoodItem.allergy);
        formData.append("protein", newFoodItem.protein);
        formData.append("fat", newFoodItem.fat);
        formData.append("carbs", newFoodItem.carbs);
        formData.append("calories", newFoodItem.calories);
        formData.append("image", newFoodItem.image);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        axios
            .post("http://localhost:8081/fooditems/1/createItem", formData, config)
            .then((response) => {
                console.log("Food item added successfully:", response.data);
                setFoodItems([...foodItems, response.data]);
                setNewFoodItem({
                    name: "",
                    description: "",
                    price: "",
                    image: null,
                    protein: 0,
                    carbs: 0,
                    sugar: 0,
                    fat: 0,
                    calories: 0,
                    allergy: "",
                });
                toggleAddFoodPopup();
            })
            .catch((error) => {
                console.error("Error adding food item:", error);
            });
    };

    return (<>
            {/*<>{console.log(foodItems+"928347912387")}</>*/}
            <RestaurantSidebar/>
            <div className="item-container">
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
                        {foodItems.map((food) => (<tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.description}</td>
                            <td>{food.price.toFixed(2)}</td>
                            <td>{food.category}</td>
                            <td>
                                {<img
                                    src={"http://localhost:8081/fooditem/download/" + food.food_id}
                                    alt={food.name}
                                    width="50"
                                    height="50"
                                />}
                            </td>
                        </tr>))}
                        </tbody>
                    </table>
                    <button className="item-add-button" onClick={toggleAddFoodPopup}>
                        Add Food Item
                    </button>
                    {showAddFoodPopup && (<div className="item-add-popup">
                        <form>
                            <h1 className="p-title">
                                Add a new Item to your restaurant
                                <button
                                    className="close-button-1"
                                    onClick={toggleAddFoodPopup}
                                    style={{fontSize: "25px"}}
                                >
                                    &times;
                                </button>
                            </h1>
                            <br/>
                            <h3>Food Info</h3>
                            <div className="form-column">
                                <div className="form-group">
                                    <label htmlFor="itemName">Name:</label>
                                    <input
                                        type="text"
                                        id="itemName"
                                        name="name"
                                        value={newFoodItem.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemDescription">Description:</label>
                                    <textarea
                                        id="itemDescription"
                                        name="description"
                                        value={newFoodItem.description}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemPrice">Price (Rs.):</label>
                                    <input
                                        type="number"
                                        id="itemPrice"
                                        name="price"
                                        value={newFoodItem.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemAllergy">Allergy :</label>
                                    <input
                                        type="text"
                                        id="itemAllergy"
                                        name="allergy"
                                        value={newFoodItem.allergy}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="itemCategory">Category:</label>*/}
                                {/*    <select*/}
                                {/*        id="itemCategory"*/}
                                {/*        name="category"*/}
                                {/*        value={newFoodItem.category}*/}
                                {/*        onChange={handleInputChange}*/}
                                {/*    >*/}
                                {/*        <option value="FOOD_NON_VEG">Non-Veg</option>*/}
                                {/*        <option value="FOOD_VEG">Veg</option>*/}
                                {/*        <option value="SOFT_DRINKS">Drinks</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <label htmlFor="image">Upload Image:</label>
                                    <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                                        Please upload high-res images<br />
                                    </p>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept=".png"
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                            <h3> Nutritional Information </h3>
                            <div className="form-column">

                                <div className="form-group">
                                    <label htmlFor="itemProtein">Protein (g):</label>
                                    <input
                                        type="number"
                                        id="itemProtein"
                                        name="protein"
                                        step="0.01"
                                        value={newFoodItem.protein}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemCarbohydrates">Carbohydrates (g):</label>
                                    <input
                                        type="number"
                                        id="itemCarbohydrates"
                                        name="carbs"
                                        step="0.01"
                                        value={newFoodItem.carbs}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="itemSugar">Sugar (g):</label>
                                    <input
                                        type="number"
                                        id="itemSugar"
                                        name="sugar"
                                        step="0.01"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemFam">Fat (g):</label>
                                    <input
                                        type="number"
                                        id="itemFat"
                                        name="fat"
                                        value={newFoodItem.fat}
                                        onChange={handleInputChange}
                                        step="0.01"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemCalories">Calories (kcal):</label>
                                    <input
                                        type="number"
                                        id="itemCalories"
                                        name="calories"
                                        step="0.01"
                                        onChange={handleInputChange}
                                        value={newFoodItem.calories}
                                        required
                                    />
                                </div>
                                <button className="add-2" type="button" onClick={addFoodItem}>
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>)}
                </div>
            </div>
        </>
    );
}
