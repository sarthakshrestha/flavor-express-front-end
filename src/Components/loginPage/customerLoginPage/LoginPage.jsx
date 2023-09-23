import React, { useRef, useState } from "react";
import picture from "../images/picture.jpg";
import Footer from "../../../sharedComponents/footer/Footer";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../../../sharedComponents/header/Header";
import { toast } from "react-toastify";

export default function LoginPage() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loginError, setLoginError] = useState(null);

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

                // Check if the response indicates a successful login (customize this based on your API response)
                if (response.status === 200) {
                    localStorage.setItem(
                        "FlavorExpressUserToken",
                        JSON.stringify(response.data.jwtToken)
                    );
                    localStorage.setItem("UserData", JSON.stringify(response.data.person));

                    // Show a success toast notification
                    toast.success("Successfully logged in", {
                        position: toast.POSITION.TOP_RIGHT,
                    });

                    // Redirect to another page if needed
                    // history.push("/dashboard");
                } else {
                    // Handle other status codes if needed
                    // For example, you can show an error message here for other status codes.
                    // If you have specific error messages from your API, you can access them in response.data.
                    // Example: toast.error(response.data.errorMessage);

                    // Set login error message
                    setLoginError("An error occurred. Please try again later");
                }
            })
            .catch((error) => {
                console.error("Error:", error);

                // Show an error toast notification for wrong credentials
                toast.error("Wrong credentials, please check again", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
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
                    {loginError && <p className="error-message">{loginError}</p>}
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
