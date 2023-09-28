import React, { useState, useEffect } from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";
import { useCart } from "./cartContext";
import { Link } from "react-router-dom";

const PRICE_PREFIX = "Rs. ";
const DELIVERY_CHARGE_PERCENTAGE = 5;

const parsePrice = (price) =>
  parseFloat(price.replace(PRICE_PREFIX, "").replace(",", ""));

const calculateDeliveryCharge = (totalPrice) =>
  (totalPrice * DELIVERY_CHARGE_PERCENTAGE) / 100;

export default function Cart() {
  const [promoCode, setPromoCode] = useState("");
  const {
    cartItems,
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity, // Updated function
  } = useCart();

  const addMealPlanToCart = () => {
    // You can set the planPrice based on the plan ID
    let planPrice = 0;
    if (mealPlanItem.plan === 1) {
      planPrice = 500;
    } else if (mealPlanItem.plan === 2) {
      planPrice = 750;
    } else if (mealPlanItem.plan === 3) {
      planPrice = 800;
    }

    const mealPlanItemWithPrice = {
      ...mealPlanItem,
      planPrice: planPrice,
    };

    addToCart(mealPlanItemWithPrice);
  };

  const [totalNutrition, setTotalNutrition] = useState({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  const removeMealPlan = () => {
    const mealPlanItem = cartItems.find((item) => item.id === "meal_plan");
    if (mealPlanItem) {
      removeFromCart(mealPlanItem.id);
    }
  };

  useEffect(() => {
    // Calculate total nutrition when cart items change
    let calories = 0;
    let protein = 0;
    let carbohydrates = 0;
    let fat = 0;

    for (const item of cartItems) {
      if (item.nutrition) {
        calories += item.nutrition.calories * item.quantity;
        protein += item.nutrition.protein * item.quantity;
        carbohydrates += item.nutrition.carbohydrates * item.quantity;
        fat += item.nutrition.fat * item.quantity;
      }
    }

    setTotalNutrition({ calories, protein, carbohydrates, fat });
  }, [cartItems]);

  const calculateItemTotalPrice = (item) => {
    console.log(item);
    // Check if 'price' and 'planPrice' are defined and not empty
    if (item.price && typeof item.price === "string") {
      const itemPrice = parsePrice(item.price);

      // Check if 'planPrice' is available and not empty
      if (item.planPrice && typeof item.planPrice === "number") {
        // Calculate the total price using 'planPrice' if available
        return (item.planPrice + itemPrice) * item.quantity;
      } else {
        // If 'planPrice' is not available, use the regular 'price'
        return itemPrice * item.quantity;
      }
    } else {
      // Handle missing or invalid price (e.g., set a default price)
      return 0; // You can set a default value or handle it differently
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (const item of cartItems) {
      totalPrice += calculateItemTotalPrice(item);
    }

    return totalPrice;
  };

  // Filter out the meal plan item from cartItems
  const cartItemsWithoutMealPlan = cartItems.filter(
    (item) => item.id !== "meal_plan"
  );

  // Find the meal plan item in cartItems
  const mealPlanItem = cartItems.find((item) => item.id === "meal_plan");

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
          <span className="nutrient-value">{mealPlanItem?.totalCalories || totalNutrition.calories} kcal</span>
        </div>
        <div className="nutrient">
          <span className="nutrient-label">Protein:</span>
          <span className="nutrient-value">{mealPlanItem?.totalProtein || totalNutrition.protein} g</span>
        </div>
        <div className="nutrient">
          <span className="nutrient-label">Carbohydrates:</span>
          <span className="nutrient-value">
            {mealPlanItem?.totalCarbs || totalNutrition.carbohydrates} g
          </span>
        </div>
        <div className="nutrient">
          <span className="nutrient-label">Fat:</span>
          <span className="nutrient-value">{mealPlanItem?.totalFat || totalNutrition.fat} g</span>
        </div>
      </div>
      {!mealPlanItem && <div className="food-cart">
        <table className="food-table">
          <thead>
          <tr className="first-row">
            <th>S.N</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {cartItemsWithoutMealPlan.map((item, index) => (
              <tr className="table-row" key={item.id}>
                <td>{index + 1}</td>
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
                      onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                      className="quantity-button"
                      onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </td>
                <td className="price-td">
                  Rs. {calculateItemTotalPrice(item)}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
        <hr className="rounded" />
      </div>}
      {mealPlanItem && (
        <div className="meal-plan-table">
          <h2>Selected Meal Plan</h2>
          <table className="meal-plan-table">
            <thead>
              <tr className="first-row">
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row" key={mealPlanItem.id}>
                <td>{mealPlanItem.name}</td>
                <td>{mealPlanItem.quantity}</td>
                <td className="price-td">
                  Rs. {mealPlanItem.totalPrice}
                </td>
                <td>
                  <button
                    className="remove-meal-plan"
                    onClick={removeMealPlan}
                  >
                    Remove Meal Plan
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="subscribe-btn">
            <Link to="/meal-checkout">
          <button className="subscribe-to-mealplan">Subscribe to Meal Plan</button>
            </Link>
          </div>
        </div>
      )}
      {
        !mealPlanItem &&
          <div>
            <div className="promo-code-box">
              <input
                  type="text"
                  placeholder="Enter Your Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-code-input"
              />
              <button className="apply-promo-button">Apply</button>
            </div>
            <div className="calculation">
              <h1>Your Total: {PRICE_PREFIX + calculateTotalPrice()}</h1>
              <p>Note: {DELIVERY_CHARGE_PERCENTAGE}% is for the delivery charge</p>
              <Link to="/checkout">
                <button className="checkout-btn">Head to Checkout</button>
              </Link>
            </div>
          </div>
      }
      <Footer />
    </>
  );
}
