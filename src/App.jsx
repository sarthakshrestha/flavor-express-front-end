import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/homePage/HomePage";
import LoginPage from "./Components/loginPage/LoginPage";
import AdminLoginPage from "./Components/loginPage/AdminLoginPage";
import RestaurantsPage from "./Components/restaurantsPage/RestaurantsPage";
import RegistrationPage from "./Components/registrationPage/RegistrationPage";
import Header from "./sharedComponents/header/Header";


function App() {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/nav" element={<Header/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/adminLoginPage" element={<AdminLoginPage/>}/>
                {/*<Route path="/restaurantLoginPage" element={<RestaurantLoginPage />} />*/}
                <Route path="/registrationPage" element={<RegistrationPage/>}/>
                <Route path="/restaurantsPage" element={<RestaurantsPage/>}/>

                {/*<Route path="/restaurantAboutPage" element={<RestaurantAboutPage />} />*/}
                {/*<Route path="/foodItemsPage" element={<FoodItemsPage />} />*/}
                {/*<Route path="/cartPage" element={<CartPage />} />*/}
                <Route path="*" element={<h1>PageNotFound! :(</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
