import React, {useState, useEffect} from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import {useCart} from "../cartPage/cartContext";
import {calculateTotalNutrition} from "../cartPage/cartContext";
import "./checkOutPage.css";
import {Link} from "react-router-dom";

const PRICE_PREFIX = "Rs. ";
const DELIVERY_CHARGE_PERCENTAGE = 5;

const parsePrice = (price) =>
    parseFloat(price.replace(PRICE_PREFIX, "").replace(",", ""));
const calculateItemTotalPrice = (item) =>
    parsePrice(item.price) * item.quantity;
const calculateDeliveryCharge = (totalPrice) =>
    (totalPrice * DELIVERY_CHARGE_PERCENTAGE) / 100;

export default function CheckoutPage() {

    const [promoCode, setPromoCode] = useState("");
    const {cartItems, removeFromCart, decrementQuantity, incrementQuantity} =
        useCart();

    const [totalNutrition, setTotalNutrition] = useState({
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    });

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cartItems) {
            totalPrice += calculateItemTotalPrice(item);
        }
        // Add delivery charge
        const deliveryCharge = calculateDeliveryCharge(totalPrice);
        totalPrice += deliveryCharge;
        return totalPrice;
    };

    useEffect(() => {
        // Calculate and set the total nutrition when cart items change
        const nutrition = calculateTotalNutrition(cartItems); // Calculate the nutrition
        setTotalNutrition(nutrition); // Set the total nutrition
    }, [cartItems]);

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
        // Apply and validate promo code logic here
    };

    return (
        <>
            <Header/>
            <div className="ck-checkout-container">
                <div className="ck-cart-summary">
                    <h1>Your Order</h1>
                    <br/>
                    <table className="ck-food-table">
                        <thead>
                        <tr className="ck-first-row">
                            <th>S.N</th>
                            <th>Photo</th>
                            <th className="fz-name">Name</th>
                            <th className="fz-quantity">Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item, index) => (
                            <tr className="ck-table-row" key={item.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        className="ck-food-image"
                                        src={require(`../../Components/foodPage/images/${item.image}`)}
                                        alt={item.name}
                                    />
                                </td>
                                <td>
                                    <div className="ck-cart-items">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p className="ck-allergy">Allergies: {item.allergies}</p>
                                        <br/>
                                        <button
                                            className="ck-remove-item"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span className="ck-quantity">{item.quantity}</span>
                                </td>
                                <td className="ck-price-td">
                                    {PRICE_PREFIX + calculateItemTotalPrice(item).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="ck-calculation">
                        <h2>Your Total: {PRICE_PREFIX + calculateTotalPrice().toFixed(2)}</h2>
                        <p>Note: {DELIVERY_CHARGE_PERCENTAGE}% is for the delivery charge</p>
                    </div>
                </div>

                <div className="ck-checkout-form">
                    <h1>Enter your delivery details</h1>
                    <form className="inner-form">
                        <div className="ck-checkout-group">
                            <label htmlFor="ck-address">Delivery Address:</label>
                            <input
                                type="text"
                                id="ck-address"
                                name="address"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <div className="ck-checkout-group">
                            <label htmlFor="ck-phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="ck-phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="ck-checkout-group">
                            <label htmlFor="ck-driver">Notes for Delivery:</label>
                            <input type="text" id="ck-driver" name="notes"
                                   placeholder="Any notes for the delivery driver?"/>
                        </div>
                        <button className="ck-checkout-btn">Confirm Order</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}