import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";
import { useCart } from "./cartContext";

export default function Cart() {
    const [promoCode, setPromoCode] = useState("");
    const { cartItems, removeFromCart, decrementQuantity, incrementQuantity, addToCart } = useCart(); // Destructure the functions from useCart

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };
    // Changes
    return (
        <>
            <Header />
            <div className="cartHeading">
                <h2>Welcome to</h2>
                <h2>Your Cart</h2>
            </div>
            <div className="nutritional-breakdown">
                <h1 className="n-heading">Nutritional Breakdown</h1>
                <div className="nutrient">
                    <span className="nutrient-protein">Protein:</span>
                    <span className="nutrient-value"></span>
                </div>
                {/* Rest of your code */}
            </div>
            <div className="food-cart">
                <table className="food-table">
                    <thead>
                    <tr className="first-row">
                        <th>S.N</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                        <tr className="table-row" key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    className="food-image"
                                    src={require(`../../Components/foodPage/images/${item.image}`)}
                                    alt={item.name}
                                />
                            </td>
                            <td>
                                <div className="cart-items">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p className="allergy">Allergies: {item.allergies}</p>
                                    <br />
                                    <button
                                        className="remove-item"
                                        onClick={() => removeFromCart(item.id)} // Use removeFromCart to remove the item
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            </td>
                            <td>
                                <button
                                    className="quantity-button"
                                    onClick={() => decrementQuantity(item.id)} // Use decrementQuantity to decrease the quantity
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantity}</span>
                                <button
                                    className="quantity-button"
                                    onClick={() => incrementQuantity(item.id)} // Use incrementQuantity to increase the quantity
                                >
                                    +
                                </button>
                            </td>
                            <td className="price-td">{item.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <hr className="rounded"></hr>
            </div>
            <div className="calculation">
                <h1>Your Total: </h1>
                <p>Note: 5% is for the delivery charge</p>
            </div>
            <hr className="rounded-bar"></hr>
            <div className="promo-code-box">
                <input
                    type="text"
                    placeholder="Enter Your Promo Code"
                    value={promoCode}
                    onChange={handlePromoCodeChange}
                    className="promo-code-input"
                />
                <button className="apply-promo-button">Apply</button>
            </div>
            <Footer />

        </>
    );
}
