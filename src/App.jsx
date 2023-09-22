import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/homePage/HomePage";
import LoginPage from "./Components/loginPage/LoginPage";
import AdminLoginPage from "./Components/loginPage/AdminLoginPage";
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import Header from "./sharedComponents/header/Header";
import FoodPage from "./Components/foodPage/foodPage";
import RestaurantPage from "./Components/restaurantPage/restaurantPage";
import Cart from "./Components/cartPage/cart";
import AdminDashboard from "./Components/adminDashboard/adminDashboard";
import MealPlan from "./Components/mealPlan/mealPlan";
import { CartProvider } from "./Components/cartPage/cartContext"; // Import CartProvider

function App() {
    return (
        <CartProvider> {/* Wrap your entire app with CartProvider */}
            <div className="appContainer">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nav" element={<Header />} />
                    <Route path="/loginPage" element={<LoginPage />} />
                    <Route path="/adminLoginPage" element={<AdminLoginPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/registrationPage" element={<RegistrationPage />} />
                    <Route path="/foodPage" element={<FoodPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/restaurant" element={<RestaurantPage />} />
                    <Route path="/meal-plans" element={<MealPlan />} />
                    <Route path="*" element={<h1>PageNotFound! :(</h1>} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;
