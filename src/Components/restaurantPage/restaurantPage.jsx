import React from "react";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./restaurantPage.css";
import restaurantData from "./restaurant.json"; // Import the JSON data

export default function RestaurantPage() {
    return (
        <>
            <Header />
            <div className="restaurant-container">
                <h1 className="restaurant-page-title">
                    We pour our heart and soul into delivering every dish from Flavor Express restaurants!
                </h1>
                <div className="restaurant-box-container">
                    {restaurantData.map((restaurant) => (
                        <div className="restaurant-box" key={restaurant.id}>
                            <img src={require(`./images/${restaurant.imageUrl}`)} alt="Restaurant Image" />
                            <div className="restaurant-description">
                                <div className="restaurant-title">{restaurant.name}</div>
                                <div className="restaurant-info">
                                    <p className="restaurant-description">{restaurant.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
