import React from "react";
import {useRef} from "react";
import picture from "../images/admin.jpg";
import Footer from "../../../sharedComponents/footer/Footer";
import "./AdminLoginPage.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../../../sharedComponents/header/Header";
import {toast} from "react-toastify";


export default function AdminLoginPage() {
    let emailRef = useRef("");
    let passwordRef = useRef("");

    const nav = useNavigate();

    function loginHandle() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: "ROLE_ADMIN",
        };

        axios
            .post("http://localhost:8081/auth/login", data) // Assuming a different endpoint for admin login
            .then((response) => {
                console.log(response.data.jwtToken);
                console.log(response);

                if (response.status === 200 && response.data && response.data.jwtToken) {
                    localStorage.setItem(
                        "FlavorExpressAdminToken",
                        JSON.stringify(response.data.jwtToken)
                    );
                    // Add your additional logic here for a successful admin login
                    toast.success("Admin Login successful!", {
                        autoClose: 3000,
                    });
                    nav('/admin'); // Navigate to the admin dashboard
                } else {
                    // Handle unsuccessful admin login (e.g., incorrect password)
                    toast.error("Wrong credentials, please check properly", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle other errors (e.g., network issues)
                toast.error("Admin login failed. Please check your credentials.");
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
                    <h4>Administrator Login</h4>
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
                </div>
            </div>
            <div className="EmptyBox"></div>
            <Footer/>
        </>
    );
}
