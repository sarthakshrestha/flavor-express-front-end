import "./App.css";
import { Routes, Route } from "react-router-dom";

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
