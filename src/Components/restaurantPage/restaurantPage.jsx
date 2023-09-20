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
                    Flavor Express: The Go-To Delivery Choice for These Restaurants!
                </h1>
                <div className="restaurant-box-container">
                    {restaurantData.map((restaurant, index) => (
                        <div className="restaurant-box" key={index}>
                            <img src={require(`./images/${restaurant.imageUrl}`)} alt="Restaurant Image" />
                            <div className="restaurant-description">
                                <div className="restaurant-title">{restaurant.name}</div>
                                <div className="restaurant-info">
                                    <p className="restaurant-description">Description: Restaurant Description</p>
                                    <p className="restaurant-location">Location: {restaurant.location}</p>
                                    <p className="restaurant-specialty">Specialty: {restaurant.cuisine}</p>
                                    {/*<p>Rating: {restaurant.rating}/5</p>*/}
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
