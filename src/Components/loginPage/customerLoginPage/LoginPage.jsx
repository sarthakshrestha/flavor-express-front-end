import React from "react";
import { useRef } from "react";
import picture from "../images/picture.jpg";
import Footer from "../../../sharedComponents/footer/Footer";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../../../sharedComponents/header/Header";
export default function LoginPage() {
  let emailRef = useRef("");
  let passwordRef = useRef("");

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
            <p>Don't have an account?</p>
            <NavLink to="/registrationPage">Sign Up</NavLink>
          </div>
        </div>
      </div>
      <div className="EmptyBox"></div>
      <Footer />
    </>
  );
}
