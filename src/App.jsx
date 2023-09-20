import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/homePage/HomePage";
import LoginPage from "./Components/loginPage/LoginPage";
import AdminLoginPage from "./Components/loginPage/AdminLoginPage";
// import RestaurantsPage from "./Components/foodPage/foodPage";
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import Header from "./sharedComponents/header/Header";
import FoodPage from "./Components/foodPage/foodPage";
import RestaurantPage from "./Components/restaurantPage/restaurantPage";
import Cart from "./Components/cartPage/cart";
import AdminDashboard from "./Components/adminDashboard/adminDashboard";
function App() {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/nav" element={<Header/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/adminLoginPage" element={<AdminLoginPage/>}/>
                <Route path="/admin" element={<AdminDashboard/>}/>
                {/*<Route path="/restaurantLoginPage" element={<RestaurantLoginPage />} />*/}
                <Route path="/registrationPage" element={<RegistrationPage/>}/>
                <Route path="/foodPage" element={<FoodPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/restaurant" element={<RestaurantPage/>}/>

                {/*<Route path="/restaurantAboutPage" element={<RestaurantAboutPage />} />*/}
                {/*<Route path="/foodItemsPage" element={<FoodItemsPage />} />*/}
                {/*<Route path="/cartPage" element={<CartPage />} />*/}
                <Route path="*" element={<h1>PageNotFound! :(</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
