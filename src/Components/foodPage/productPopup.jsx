import React from "react";
import "./ProductPopup.css";

export default function ProductPopup({ product, onClose }) {
    return (
        <div className="product-popup">
            <div className="popup-content">
                <h2>{product.name}</h2>
                <img
                    className="product-image-popup"
                    src={require(`./images/${product.image}`)}
                    alt={product.name}
                />
                <p className="product-description">{product.description}</p>
                <div className="nutritional-table">
                    <h3>Nutritional Information</h3>
                    <table className="n-table">
                        <tr>
                            <td>Calories:</td>
                            <td>{product.nutrition.calories} kcal</td>
                        </tr>
                        <tr>
                            <td>Protein:</td>
                            <td>{product.nutrition.protein}g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates:</td>
                            <td>{product.nutrition.carbohydrates}g</td>
                        </tr>
                        <tr>
                            <td>Fat:</td>
                            <td>{product.nutrition.fat}g</td>
                        </tr>
                    </table>
                </div>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
