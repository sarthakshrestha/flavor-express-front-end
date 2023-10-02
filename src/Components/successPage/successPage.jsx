import React from "react";
import ReactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./successPage.css"; // Import your CSS file for styling
import tick from "./tick.png";
export default function SuccessPage() {
    return (
        <>
            <Header />
            <div className="success-page">
                <div className="success-message">
                    <img src={tick} name="tick" alt="tick"/>
                    <h1>Payment Successful</h1>
                    <p>Your payment has been successfully processed.</p>
                </div>
                <button className="track-order-button">Track Order</button>
            </div>
            <Footer />
        </>
    )
}
