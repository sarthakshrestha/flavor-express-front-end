import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/homePage/HomePage";
import LoginPage from "./Components/loginPage/LoginPage";
import AdminLoginPage from "./Components/loginPage/AdminLoginPage";
import RestaurantLoginPage from "./Components/loginPage/RestaurantLoginPage";
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import RestaurantsPage from "./Components/restaurantsPage/RestaurantsPage";
import RestaurantAboutPage from "./Components/restaurantAboutPage/RestaurantAboutPage";
import FoodItemsPage from "./Components/foodItemsPage/FoodItemsPage";
import CartPage from "./Components/cartPage/CartPage";

function App() {
  return (
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/adminLoginPage" element={<AdminLoginPage />} />
          <Route path="/restaurantLoginPage" element={<RestaurantLoginPage />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route path="/restaurantsPage" element={<RestaurantsPage />} />
          <Route path="/restaurantAboutPage" element={<RestaurantAboutPage />} />
          <Route path="/foodItemsPage" element={<FoodItemsPage />} />
          <Route path="/cartPage" element={<CartPage />} />

          <Route path="*" element={<h1>PageNotFound! :(</h1>} />
        </Routes>
      </div>
  );
}

export default App;
