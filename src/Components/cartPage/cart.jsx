import React, { useState, useEffect } from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";
import Cookies from "js-cookie";
import { useCart } from "./cartContext";
import { calculateTotalNutrition } from "./cartContext"; // Import calculateTotalNutrition from cartContext

const PRICE_PREFIX = "Rs. ";
const DELIVERY_CHARGE_PERCENTAGE = 5;

const parsePrice = (price) =>
  parseFloat(price.replace(PRICE_PREFIX, "").replace(",", ""));
const calculateItemTotalPrice = (item) =>
  parsePrice(item.price) * item.quantity;
const calculateDeliveryCharge = (totalPrice) =>
  (totalPrice * DELIVERY_CHARGE_PERCENTAGE) / 100;

export default function Cart() {
  const [promoCode, setPromoCode] = useState("");
  const { cartItems, removeFromCart, decrementQuantity, incrementQuantity, calculateTotalPrice } = useCart();

  const [totalNutrition, setTotalNutrition] = useState({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  useEffect(() => {
    // Update local storage with the current cart items
    // Cookies.set("cartItems", JSON.stringify(cartItems));
    
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
          <span className="nutrient-value">
            {totalNutrition.carbohydrates} g
          </span>
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
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="quantity-button"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                </td>
                <td className="price-td">{calculateItemTotalPrice(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="rounded" />
      </div>
      <div className="calculation">
        <h1>Your Total: {calculateTotalPrice()}</h1>
        <p>Note: 5% is for the delivery charge</p>
      </div>
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
