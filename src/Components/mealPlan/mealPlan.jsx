import React, { useState } from "react";
import { useCart } from "../cartPage/cartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./mealPlan.css";
import productData from "./data.json";

export default function MealPlan() {
    const { addToCart, cartItems } = useCart();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const calculatePlanName = (planNumber) => {
        switch (planNumber) {
            case 1:
                return "Veg-Option";
            case 2:
                return "Non-Veg Option";
            case 3:
                return "Mixed";
            default:
                return "Unknown";
        }
    };

    const productDataByPlan = {};
    productData.forEach((product) => {
        if (!productDataByPlan[product.plan]) {
            productDataByPlan[product.plan] = [];
        }
        productDataByPlan[product.plan].push(product);
    });

    const handleAddPlanToCart = (planNumber) => {
        if (selectedPlan !== null || cartItems?.length > 0) {
            toast.error("You can only select one meal plan at a time.");
            return;
        }

        // Get the products for the specified plan
        const productsToAdd = productData.filter(
            (product) => product.plan === planNumber
        );

        if (productsToAdd.length > 0) {
            // Calculate the plan name
            const planName = calculatePlanName(planNumber);

            // Calculate the total price for the plan
            const totalPrice = productsToAdd.reduce(
                (total, product) => total + parseFloat(product?.planPrice),
                0
            );

            const totalCalories = productsToAdd.reduce(
                (total, product) => total + parseFloat(product?.nutrition?.calories),
                0
            );

            const totalProtein = productsToAdd.reduce(
                (total, product) => total + parseFloat(product?.nutrition?.protein),
                0
            );

            const totalCarbs = productsToAdd.reduce(
                (total, product) => total + parseFloat(product?.nutrition?.carbohydrates),
                0
            );

            const totalFat = productsToAdd.reduce(
                (total, product) => total + parseFloat(product?.nutrition?.fat),
                0
            );

            // Add the selected plan to the cart as a single item
            addToCart({
                id: "meal_plan",
                name: planName,
                quantity: 1,
                totalPrice,
                products: productsToAdd,
                totalCalories: totalCalories,
                totalProtein: totalProtein,
                totalCarbs: totalCarbs,
                totalFat: totalFat,
            });

            setSelectedPlan(planNumber);
        }
    };

    return (
        <>
            <Header />
            <div className="meal-content">
                <div className="meal-title">Create a daily meal plan of your choice</div>
                <div className="meal-restaurant">
                    Short on time but hungry for great food? <br /> Feast your way through the day with FE-Kitchen's daily meal wonders!
                </div>
                <div className="meal-text">
                    Presented in hassle-free, microwave-friendly containers for effortless dining.
                </div>

                {/* Plan #1 */}
                <div className="plan-number">
                    <h1 className="plan-title">Plan #1 <span className="veg-option">(Veg-Option)</span> </h1>
                    <p style={{fontFamily: "DM Sans", fontSize: "26px"}}>Price Nrs. 1500</p>
                </div>
                <div className="product-cards">
                    {productData.slice(0, 3).map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="food-image"
                                src={require(`../../Components/mealPlan/images/${product.image}`)}
                                alt={product.name}
                            />
                            <div className="product-name">{product.name}</div>
                            <div className="product-description">{product.description}</div>
                            <h1 className="table-heading">Nutritional Breakdown</h1>
                            <table className="nutrition-table">
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Calories</td>
                                        <td>{product.nutrition.calories} kcal</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>{product.nutrition.protein} g</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>{product.nutrition.carbohydrates} g</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>{product.nutrition.fat} g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="add-plan-to-cart">
                    <button className="add-plan-btn" onClick={() => handleAddPlanToCart(1)}>
                        Add Plan #1 to Cart
                    </button>
                </div>

                {/* Plan #2 */}
                <div className="plan-number">
                    <h1 className="plan-title">Plan #2 <span className="nonveg-option">(Non-Veg Option)</span></h1>
                </div>
                <div className="product-cards">
                    {productData.slice(3, 6).map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="food-image"
                                src={require(`../../Components/mealPlan/images/${product.image}`)}
                                alt={product.name}
                            />
                            <div className="product-name">{product.name}</div>
                            <div className="product-description">{product.description}</div>
                            <h1 className="table-heading">Nutritional Breakdown</h1>
                            <table className="nutrition-table">
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Calories</td>
                                        <td>{product.nutrition.calories} kcal</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>{product.nutrition.protein} g</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>{product.nutrition.carbohydrates} g</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>{product.nutrition.fat} g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="add-plan-to-cart">
                    <button className="add-plan-btn" onClick={() => handleAddPlanToCart(2)}>
                        Add Plan #2 to Cart
                    </button>
                </div>

                {/* Plan #3 */}
                <div className="plan-number">
                    <h1 className="plan-title">Plan #3 <span className="nonveg-option">(Mix Option)</span></h1>
                </div>
                <div className="product-cards">
                    {productData.slice(6, 9).map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="food-image"
                                src={require(`../../Components/mealPlan/images/${product.image}`)}
                                alt={product.name}
                            />
                            <div className="product-name">{product.name}</div>
                            <div className="product-description">{product.description}</div>
                            <h1 className="table-heading">Nutritional Breakdown</h1>
                            <table className="nutrition-table">
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Calories</td>
                                        <td>{product.nutrition.calories} kcal</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>{product.nutrition.protein} g</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>{product.nutrition.carbohydrates} g</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>{product.nutrition.fat} g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="add-plan-to-cart">
                    <button className="add-plan-btn" onClick={() => handleAddPlanToCart(3)}>
                        Add Plan #3 to Cart
                    </button>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}
