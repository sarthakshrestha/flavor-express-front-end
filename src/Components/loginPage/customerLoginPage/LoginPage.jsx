import React, { useRef, useState, useEffect } from "react";
import picture from "../images/picture.jpg";
import Footer from "../../../sharedComponents/footer/Footer";
import "./LoginPage.css";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../../../sharedComponents/header/Header";
import { toast } from "react-toastify";

export default function LoginPage() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loginError, setLoginError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const nav = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in when the component mounts
        const userData = localStorage.getItem("UserData");
        setIsLoggedIn(!!userData); // Set isLoggedIn to true if UserData is present in localStorage
    }, []);

    function loginHandle() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: "ROLE_CUSTOMER",
        };

        axios
            .post("http://localhost:8081/auth/login", data)
            .then((response) => {
                console.log(response.data.jwtToken);
                console.log(response);

                if (response.status === 200 && response.data && response.data.jwtToken) {
                    localStorage.setItem(
                        "FlavorExpressUserToken",
                        JSON.stringify(response.data.jwtToken)
                    );
                    // Add your additional logic here for a successful login
                    toast.success("Admin Login successful!", {
                        autoClose: 3000,
                    });
                    nav('/admin');
                } else {
                    // Handle unsuccessful login (e.g., incorrect password)
                    toast.error("Wrong credentials, please check properly", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle other errors (e.g., network issues)
                toast.error("Login failed. Please check your credentials.");
            });
    }


        function logoutHandle() {
        // Clear user data from localStorage and set isLoggedIn to false
        localStorage.removeItem("FlavorExpressUserToken");
        localStorage.removeItem("UserData");
        setIsLoggedIn(false);
    }

    return (
        <>
            <Header />
            <div className="loginbody">
                <div className="login-image">
                    <img src={picture} alt="" />
                </div>
                <div className="LoginContainer">
                    <h4>Login to your account</h4>
                    <p>Welcome back, enter your credentials to access your account</p>
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
                    <div className="already">
                        <p>
                            Don't have an account?{" "}
                            <NavLink to="/registrationPage">Sign Up</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className="EmptyBox"></div>
            <Footer />
        </>
    );
}
