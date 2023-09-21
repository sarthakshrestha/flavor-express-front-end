import React from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./mealPlan.css";

const productData = [
    {
        id: 1,
        name: 'Breakfast',
        description: 'Roti along with boiled vegetables',
        image: 'p1breakfast.png',
        nutrition: {
            calories: 250,
            protein: 10,
            carbs: 30,
            fat: 12,
        },
    },
    {
        id: 2,
        name: 'Lunch',
        description: 'Roti along with boiled vegetables',
        image: 'p1lunch.png',
        nutrition: {
            calories: 300,
            protein: 15,
            carbs: 35,
            fat: 14,
        },
    },
    {
        id: 3,
        name: 'Dinner',
        description: 'Roti along with boiled vegetables',
        image: 'p1breakfast.png',
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 28,
            fat: 10,
        },
    },
    {
        id: 4,
        name: 'Breakfast',
        description: 'Scrambled eggs with toast',
        image: 'p1breakfast.png',
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 25,
            fat: 14,
        },
    },
    {
        id: 5,
        name: 'Lunch',
        description: 'Grilled chicken salad',
        image: 'p1lunch.png',
        nutrition: {
            calories: 350,
            protein: 22,
            carbs: 15,
            fat: 16,
        },
    },
    {
        id: 6,
        name: 'Dinner',
        description: 'Salmon with steamed broccoli',
        image: 'p1breakfast.png',
        nutrition: {
            calories: 380,
            protein: 20,
            carbs: 20,
            fat: 18,
        },
    },
];

export default function MealPlan() {
    return (
        <>
            <Header />
            <div className="meal-content">
                <div className="meal-title">Create a daily meal plan of your choice</div>
                <div className="meal-restaurant">
                    For Serving the best daily meal plans, <br />
                    We have FE-Kitchen
                </div>
                <div className="plan-number">
                    <h1 className="plan-title">Plan #1</h1>
                </div>

                <div className="product-cards">
                    {productData.slice(0, 3).map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="food-image"
                                src={require(`./images/${product.image}`)}
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
                                    <td>{product.nutrition.carbs} g</td>
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
                <button className="plan-add-btn">Add Plan to Cart</button>
                <div className="plan-number">
                    <h1 className="plan-title">Plan #2</h1>
                </div>
                <div className="product-cards">
                    {productData.slice(3).map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="food-image"
                                src={require(`./images/${product.image}`)}
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
                                    <td>{product.nutrition.carbs} g</td>
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
            </div>
            <Footer />
        </>
    );
}
