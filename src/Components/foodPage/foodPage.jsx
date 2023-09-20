import React, {useState} from "react";
import Header from "../../sharedComponents/header/Header";
import "./foodPage.css";
import Footer from "../../sharedComponents/footer/Footer";
import productsData from "./product.json";
import {Link} from "react-router-dom";

export default function FoodPage() {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
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
                    {productsData.map((product) => (
                        <div className="product" key={product.id}>
                            {/* Use require to import image paths */}
                            <img
                                className="product-image"
                                src={require(`./images/${product.image}`)} // Adjust the path to your images
                                alt={product.name}
                            />
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <br/>
                            <p className="restaurant-name">Offered by: {product.restaurant}</p>
                            <br/>
                            <p className="allergies">{product.allergies}</p>
                            <br/>
                            <p className="price">{product.price}</p>
                            <br/>
                            <button className="description-button">Description</button>
                            <button className="add-to-cart-button">
                                <Link to={`/cart/${product.id}`}>Add to Cart</Link>
                            </button>
                            {/*<button className="add-to-cart-button">Add to Cart</button>*/}
                            <br/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}
