import React, {useRef} from "react";
import picture from "../images/restaurant.jpg";
import Footer from "../../../sharedComponents/footer/Footer";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../../../sharedComponents/header/Header";
import "./RestaurantLoginPage.css";
import {toast} from "react-toastify";

export default function RestaurantLoginPage() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    function loginHandle() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: "ROLE_ADMIN",
        };

        axios
            .post("http://localhost:8081/auth/login", data)
            .then((response) => {
                console.log(response.data.jwtToken);
                localStorage.setItem(
                    "FlavorExpressUserToken",
                    JSON.stringify(response.data.jwtToken)
                );
                if (response) {
                    toast.success("Restaurant Login successful!", {
                        autoClose: 3000,
                    });
                    navigate('/restro')
                }
            })
            .catch((error) => {
                toast.error("Check Restaurant's Credentials")
                console.error(error);
            });
    }

    return (
        <>
            <Header/>
            <div className="loginbody">
                <div className="login-image">
                    <img src={picture} alt=""/>
                </div>
                <div className="LoginContainer">
                    <h4>Login to access your restaurant</h4>
                    <p>Please enter the correct credentials to access restaurant dashboard.</p>
                    <div className="emailDiv">
                        <p>Email</p>
                        <input
                            type="email"
                            required
                            placeholder="flavorexpress@gmail.com"
                            ref={emailRef}
                        />
                    </div>
                    <div className="passwordDiv">
                        <p>Password</p>
                        <input
                            type="password"
                            required
                            placeholder="password"
                            ref={passwordRef}
                        />
                    </div>
                    <button className="logInButton" onClick={loginHandle}>
                        Log in
                    </button>
                    <div className="already-r">
                        <p>Don't have an restaurant associated with Flavor Express? Please email the admin to be Flavor Express certified restaurant!</p>
                    </div>
                </div>
            </div>
            <div className="EmptyBox"></div>
            <Footer/>
        </>
    );
}
