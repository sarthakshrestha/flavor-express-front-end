import react from "react";
import reactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";

export default function mealPlan() {
    return (<>
        <Header/>
        <div className="meal-content">
            <div className="meal-title">
                Refill
            </div>


        </div>
        <Footer/>
    </>)
}