import react from "react";
import reactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./mealPlan.css";

const productData = [
    {
        id: 1,
        name: 'Breakfast',
        description: 'Roti along with boiled vegetables',
        image: 'product1.jpg',
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
        image: 'product2.jpg',
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
        image: 'product3.jpg',
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 28,
            fat: 10,
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
                    {productData.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
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