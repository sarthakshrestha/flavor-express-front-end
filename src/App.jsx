import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/homePage/HomePage";
import LoginPage from "./Components/loginPage/customerLoginPage/LoginPage";
import AdminLoginPage from "./Components/loginPage/adminLoginPage/AdminLoginPage";
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import Header from "./sharedComponents/header/Header";
import FoodPage from "./Components/foodPage/foodPage";
import RestaurantPage from "./Components/restaurantPage/restaurantPage";
import Cart from "./Components/cartPage/cart";
import AdminDashboard from "./Components/adminDashboard/adminDashboard";
import MealPlan from "./Components/mealPlan/mealPlan";
import RestaurantLoginPage from "./Components/loginPage/restaurantLoginPage/RestaurantLoginPage";
import CustomerSidebar from "./Components/customerDashboard/customerSidebar/customerSidebar";
import { CartProvider } from "./Components/cartPage/cartContext"; // Import CartProvider
import DriverLoginPage from "./Components/loginPage/driverLoginPage/DriverLoginPage";
import AllRestaurants from "./Components/adminDashboard/restaurantView/restaurantView";
import AllCustomers from "./Components/adminDashboard/usersView/usersView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <CartProvider> {/* Wrap your entire app with CartProvider */}
            <div className="appContainer">
                <ToastContainer /> {/* Add the ToastContainer here */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nav" element={<Header />} />
                    <Route path="/loginPage" element={<LoginPage />} />
                    <Route path="/adminLoginPage" element={<AdminLoginPage />} />
                    <Route
                        path="/restaurantLoginPage"
                        element={<RestaurantLoginPage />}
                    />
                    <Route path="/driverLoginPage" element={<DriverLoginPage />} />
                    <Route path="/customer" element={<CustomerSidebar />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/registrationPage" element={<RegistrationPage />} />
                    <Route path="/admin/restaurants" element={<AllRestaurants />} />
                    <Route path="/admin/customers" element={<AllCustomers />} />
                    <Route path="/foodPage" element={<FoodPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/restaurant" element={<RestaurantPage />} />
                    <Route path="/meal-plans" element={<MealPlan />} />
                    <Route path="*" element={<h1>PageNotFound! :(</h1>} />
                </Routes>
                //Changes
            </div>
        </CartProvider>
    );
}

export default App;
