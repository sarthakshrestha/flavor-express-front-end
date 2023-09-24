import React from "react";
import {Routes, Route} from "react-router-dom";
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
import {CartProvider} from "./Components/cartPage/cartContext"; // Import CartProvider
import OrderOnTheWay from "./Components/customerDashboard/mainDashboard/mainDashboard";

import DriverLoginPage from "./Components/loginPage/driverLoginPage/DriverLoginPage";
import AllRestaurants from "./Components/adminDashboard/restaurantView/restaurantView";
import AllCustomers from "./Components/adminDashboard/usersView/usersView";
import AllDrivers from "./Components/adminDashboard/driverView/driverView";
import EditProfile from "./Components/customerDashboard/editProfile/editProfile";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (<CartProvider>
            <div className="appContainer">
                <ToastContainer/>
                <Routes>

                    {/*//Home Page*/}
                    <Route path="/" element={<HomePage/>}/>

                    {/*//Header*/}
                    <Route path="/nav" element={<Header/>}/>

                    {/*// Customer Login Page*/}
                    <Route path="/loginPage" element={<LoginPage/>}/>

                    {/*//Admin Login Page*/}
                    <Route path="/adminLoginPage" element={<AdminLoginPage/>}/>

                    {/*// Restaurant Login Page*/}
                    <Route path="/restaurantLoginPage" element={<RestaurantLoginPage/>} />

                    {/*// Driver Login Page*/}
                    <Route path="/driverLoginPage" element={<DriverLoginPage/>}/>

                    {/*// Customer Registration Page*/}
                    <Route path="/registrationPage" element={<RegistrationPage/>}/>

                    {/*// Customer Dashboard*/}
                    <Route path="/customer" element={<CustomerSidebar/>}/>
                    <Route path="/customer/order" element={<OrderOnTheWay/>}/>
                    <Route path="/customer/edit" element={<EditProfile/>}/>

                    {/*// Admin Dashboard*/}
                    <Route path="/admin" element={<AdminDashboard/>}/>
                    <Route path="/admin/restaurants" element={<AllRestaurants/>}/>
                    <Route path="/admin/customers" element={<AllCustomers/>}/>
                    <Route path="/admin/drivers" element={<AllDrivers/>}/>

                    {/*//Food page*/}
                    <Route path="/foodPage" element={<FoodPage/>}/>

                    {/*//Cart*/}
                    <Route path="/cart" element={<Cart/>}/>

                    {/*//Restaurant Page*/}
                    <Route path="/restaurant" element={<RestaurantPage/>}/>

                    {/*// Meal Plan Page*/}
                    <Route path="/meal-plans" element={<MealPlan/>}/>

                    {/*// Non-existent Pages*/}
                    <Route path="*" element={<h1>PageNotFound! :(</h1>}/>

                </Routes>
                {/*//Changes*/}
            </div>
        </CartProvider>);
}

export default App;
