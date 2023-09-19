import React, {useState} from "react";
import Header from "../../sharedComponents/header/Header";
import pizza from "./images/pizza.png";
import coffeeImage from "./images/coffee.png"; // Import the coffee image

import "./foodPage.css";
import Footer from "../../sharedComponents/footer/Footer"; // Import your CSS file here

export default function FoodPage() {

    const [filter, setFilter] = useState("all"); // Default filter is "all"

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (<>
        <Header/>
        <div className="container">
            <p className="subText"></p>
            <h2 className="userLine">Welcome to Flavor Express, User User</h2>
            <h1 className="headLine">Explore and order mouthwatering meals!</h1>

            <div className="filter-box">
                <h1 className="filter-h1">Filter Categories</h1>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={filter === "all"}
                        onChange={handleFilterChange}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="veg"
                        checked={filter === "veg"}
                        onChange={handleFilterChange}
                    />
                    Vegetarian
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="nonveg"
                        checked={filter === "nonveg"}
                        onChange={handleFilterChange}
                    />
                    Non-Vegetarian
                </label>
            </div>
            <div className="products-container">
                <div className="product">
                    <img className="product-image" src={pizza} alt="Pizza"/>
                    <h3 className="product-title">Baconizer Pizza</h3>
                    <p className="product-description">A mouthwatering pizza with your favorite toppings.</p><br/>
                    <p className="restaurant-name">Offered by: Restaurant Zozo Pizza</p>
                    <br/>
                    <p className="allergies">CONTAINS DAIRY PRODUCTS</p>
                    <br/>
                    <p className="price">Rs. 50</p><br/>
                    <button className="description-button">Description</button>
                    {' '}
                    <button className="add-to-cart-button">Add to Cart</button>
                    <br/>
                </div>
                <div className="product">
                    <img className="product-image" src={coffeeImage} alt="Chocolate Drink"/>
                    <h3 className="product-title">Coffee</h3>
                    <p className="product-description">Creamy and rich latte to satisfy your cravings.</p><br/>
                    <p className="restaurant-name">Offered by: BrewCoffee Cafe </p>
                    <br/>
                    <p className="allergies">CONTAINS DAIRY PRODUCTS</p>
                    <br/>
                    <p className="price">Rs. 50</p>
                    <br/>
                    <button className="add-to-cart-button">Add to Cart</button>
                    <br/>
                </div>
                <div className="product">
                    <img className="product-image" src={coffeeImage} alt="Chocolate Drink"/>
                    <h3 className="product-title">Coffee</h3>
                    <p className="product-description">Creamy and rich latte to satisfy your cravings.</p><br/>
                    <p className="restaurant-name">Offered by: BrewCoffee Cafe </p>
                    <br/>
                    <p className="allergies">CONTAINS DAIRY PRODUCTS</p>
                    <br/>
                    <p className="price">Rs. 50</p>
                    <br/>
                    <button className="description-button">Description</button>
                    {' '}
                    <button className="add-to-cart-button">Add to Cart</button>

                    <br/>
                </div>
                <div className="product">
                    <img className="product-image" src={coffeeImage} alt="Chocolate Drink"/>
                    <h3 className="product-title">Coffee</h3>
                    <p className="product-description">Creamy and rich latte to satisfy your cravings.</p><br/>
                    <p className="restaurant-name">Offered by: BrewCoffee Cafe </p>
                    <br/>
                    <p className="allergies">CONTAINS DAIRY PRODUCTS</p>
                    <br/>
                    <p className="price">Rs. 50</p>
                    <br/>
                    <button className="add-to-cart-button">Add to Cart</button>
                    <br/>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}
