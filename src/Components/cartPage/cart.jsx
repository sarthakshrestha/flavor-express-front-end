import React from "react";
import ReactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";

export default function Cart() {
    return (<>
            <Header/>
            <div className="cartHeading">
                <h2>Your Cart</h2>
            </div>
            <div className="nutritional-breakdown">
                <h1 className="n-heading">Nutritional Breakdown</h1>
                <div className="nutrient">
                    <span className="nutrient-protein">Protein:</span>
                    <span className="nutrient-value">20g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-sugar">Sugar:</span>
                    <span className="nutrient-value">10g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-sodium">Sodium:</span>
                    <span className="nutrient-value">500mg</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-carb">Carbohydrates:</span>
                    <span className="nutrient-value">30g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-total">Total Calories:</span>
                    <span className="nutrient-total-cal">250</span>
                </div>
            </div>
            <Footer/>
        </>)
}