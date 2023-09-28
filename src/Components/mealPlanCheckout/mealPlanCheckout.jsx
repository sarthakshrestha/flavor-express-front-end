import React, { useState } from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./mealPlanCheckout.css";
import { useCart } from "../cartPage/cartContext";

const PRICE_PREFIX = "Rs.";

export default function MealPlanCheckout() {
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        email: "",
        notes: "",
    });

    // Access the cart items using the useCart hook
    const { cartItems } = useCart();

    // Find the meal plan item in the cartItems
    const mealPlanItem = cartItems.find((item) => item.id === "meal_plan");

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your logic to handle the subscription and payment here
    };

    return (
        <>
            <Header />
            <div className="mp-checkout-content">
                <h2>Checkout For Meal Plan</h2>
                {mealPlanItem && (
                    <div className="mp-selected-meal-plan">
                        <h3>Selected Meal Plan:</h3>
                        <br/>
                        <table className="mp-meal-plan-table">
                            <thead>
                            <tr className="mp-first-row">
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="mp-table-row" key={mealPlanItem.id}>
                                <td>{mealPlanItem.name}</td>
                                <td>{mealPlanItem.quantity}</td>
                                <td className="mp-price-td">Rs. {mealPlanItem.totalPrice}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                <form className="mp-customer-info-form" onSubmit={handleSubmit}>
                    <h3>Customer Information:</h3>
                    <div className="mp-form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mp-form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your emal"
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mp-form-group">
                        <label htmlFor="notes">Notes:</label>
                        <textarea
                            placeholder="Any notes to the driver or food changes?"
                            id="notes"
                            name="notes"
                            className="txt-area"
                            value={customerInfo.notes}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="mp-proceed-to-payment">
                        Subscribe to Meal Plan.
                    </button>
                </form>
                <br/>
                <p style={{fontSize: '19px'}}><span className="smallNote" style={{color: "red"}}>Note:</span> Meal Plans are subscribed on a monthly basis, for any changes or queries please call us at +977 55519234</p>
            </div>
            <Footer />
        </>
    );
}
