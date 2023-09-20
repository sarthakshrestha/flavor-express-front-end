import React from "react";
import ReactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./restaurantPage.css";
export default function restaurantPage() {
    return (<>
            <Header/>
            <div className="restaurant-container">
                <h1 className="restaurant-title">Flavor Express: The Go-To Delivery Choice for These Restaurants!</h1>

            </div>
            <Footer/>
        </>

    )
}
