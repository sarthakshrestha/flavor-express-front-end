import React, {useRef} from "react";
import driver from "../loginPage/images/driver.jpg";
import Footer from "../../sharedComponents/footer/Footer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Header from "../../sharedComponents/header/Header";
import "./DriverLoginPage.css";

export default function RestaurantLoginPage() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function loginHandle() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: "ROLE_DRIVER",
        };

        axios
            .post("http://localhost:8081/auth/login", data)
            .then((response) => {
                console.log(response.data.jwtToken);
                localStorage.setItem(
                    "FlavorExpressUserToken",
                    JSON.stringify(response.data.jwtToken)
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <Header/>
            <div className="loginbody">
                <div className="login-image">
                    <img src={driver} alt=""/>
                </div>
                <div className="LoginContainer">
                    <h4>Driver Login</h4>
                    <p>Please enter the correct credentials to access your dashboard.</p>
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
                    <div className="forgot-password">
                        <NavLink to="/registrationPage"> Forgot Password</NavLink>
                    </div>
                    <button className="logInButton" onClick={loginHandle}>
                        Log in
                    </button>
                    <div className="already-r">
                        <p>Don't have an account associated with Flavor Express? Please email the admin to register!</p>
                    </div>
                </div>
            </div>
            <div className="EmptyBox"></div>
            <Footer/>
        </>
    );
}
