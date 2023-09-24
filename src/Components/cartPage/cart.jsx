import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";
import { useCart } from "./cartContext";

export default function Cart() {
    const [promoCode, setPromoCode] = useState("");
    const { cartItems, removeFromCart, decrementQuantity, incrementQuantity, addToCart } = useCart(); 

    const [totalNutrition, setTotalNutrition] = useState({
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    });

    useEffect(() => {
        // Calculate the total nutritional content when the cartItems change
        const newTotalNutrition = cartItems.reduce(
            (acc, item) => {
                acc.calories += item.nutrition.calories * item.quantity;
                acc.protein += item.nutrition.protein * item.quantity;
                acc.carbohydrates += item.nutrition.carbohydrates * item.quantity;
                acc.fat += item.nutrition.fat * item.quantity;
                return acc;
            },
            {
                calories: 0,
                protein: 0,
                carbohydrates: 0,
                fat: 0,
            }
        );

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    setTotalNutrition(newTotalNutrition);
    }, [cartItems]);

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
                    <span className="nutrient-label">Calories:</span>
                    <span className="nutrient-value">{totalNutrition.calories} cal</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-label">Protein:</span>
                    <span className="nutrient-value">{totalNutrition.protein} g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-label">Carbohydrates:</span>
                    <span className="nutrient-value">{totalNutrition.carbohydrates} g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-label">Fat:</span>
                    <span className="nutrient-value">{totalNutrition.fat} g</span>
                </div>
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
