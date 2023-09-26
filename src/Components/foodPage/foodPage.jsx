import React, {useState} from "react";
import Header from "../../sharedComponents/header/Header";
import "./foodPage.css";
import Footer from "../../sharedComponents/footer/Footer";
import productsData from "./product.json";
import {useCart} from "../cartPage/cartContext";
import {toast, ToastContainer} from "react-toastify";
import ProductPopup from "./productPopup";

export default function FoodPage() {
    const [filter, setFilter] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const openProductPopup = (product) => {
        setSelectedProduct(product);
    };

    const closeProductPopup = () => {
        setSelectedProduct(null);
    };

    // Use the useCart hook to access cart-related functions
    const {cartItems, addToCart} = useCart();

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // If the item already exists in the cart, increment its quantity
            toast.info("Item already exists in cart");
        } else {
            // Otherwise, add the item to the cart with a quantity of 1
            addToCart({...product, quantity: 1});
        }
    };

    return (<>
            <Header/>
            <div className="container">
                <p className="subText"></p>
                <h2 className="userLine">Welcome to <span className="flav-flav">Flavor Express</span></h2>
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
                    {productsData.map((product) => (<div className="product" key={product.id}>
                            {/* Use require to import image paths */}
                            <img
                                className="product-image"
                                src={require(`./images/${product.image}`)}  // Adjust the path to your images
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
                            <button
                                className="description-button"
                                onClick={() => openProductPopup(product)} // Open popup on click
                            >
                                Description
                            </button>
                            {/* Call the handleAddToCart function to add items to the cart */}
                            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to
                                Cart
                            </button>
                            <br/>
                        </div>))}
                </div>
                {selectedProduct && ( // Render the popup when a product is selected
                    <ProductPopup
                        product={selectedProduct}
                        onClose={closeProductPopup}
                    />
                )}
            </div>
            <ToastContainer position="top-right" autoClose={3000}/>
            <Footer/>
        </>);
}
