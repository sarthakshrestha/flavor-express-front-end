import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import { CiBurger } from "react-icons/ci";
import registerimage from "./images/registerimage.jpg";
import axios from "axios";
import Footer from "../../shared/footer/Footer";

export default function RegistrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  localStorage.setItem("FlavorExpressUserToken", JSON.stringify(""));

  let navTo = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "FirstName must be provided";
    } else if (firstName.length < 4 || firstName.length > 15) {
      newErrors.firstName =
        "First name must be greater than 4 and less than 15";
    }

    if (!lastName) {
      newErrors.lastName = "LastName must be provided";
    } else if (lastName.length < 4 || lastName.length > 20) {
      newErrors.lastName = "Last name must be greater than 4 and less than 20";
    }

    if (!email) {
      newErrors.email = "Email should be provided";
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format";
    }

    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!address) {
      newErrors.address = "Address Should be given";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number should be given";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      //Post data
      const registerData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
        phoneNumber: phoneNumber,
      };

      axios
        .post("http://localhost:8081/auth/register", registerData)
        .then((response) => {
          console.log(response.data);
          navTo("/loginPage");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <div className="RegistrationBody">
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <div className="combine_name">
              <div className="input-container">
                <label>First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="  First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder=" Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="input-container">
              <label> Email Address</label>
              <input
                type="text"
                id="email"
                placeholder="  flavorexpress@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-container">
              <label> Phone Number</label>

              <input
                type="text"
                id="phoneNumber"
                placeholder="  9842347865"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <div className="input-container">
              <label> Address</label>

              <input
                type="text"
                id="address"
                placeholder="  Dhankuta"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>

            <div className="combine-passwords">
              <div className="input-container">
                <label> Password</label>

                <input
                  type="password"
                  id="password"
                  placeholder="  Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="input-container">
                <label> Confirm Password</label>

                <input
                  type="password"
                  id="confirm_password"
                  placeholder="  Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>
            </div>
            <br />
            <div className="register-button">
              <button>Create Account</button>
            </div>
          </form>
          <div className="already">
            <p>Already have an account?</p>
            <NavLink to="/LoginPage">Login</NavLink>
          </div>
        </div>
        <div className="registration-info">
          <h1>Create Account</h1>
          <h3>What will you get?</h3>
          {/* <div className="register-icon">
          <CiBurger />
        </div> */}

          {/* <div className="icons"></div> */}
          {/* <CiBurger /> */}
          <p>
            <CiBurger style={{ marginRight: "25px" }} />
            Know exactly what’s in your food with our transparent ingredient
            lists.
          </p>
          {/* <CiBurger /> */}
          <p>
            Tailor your meal plans to suit your dietary preferences and health
            goals.
          </p>
          {/* <CiBurger /> */}
          <p>
            Exclusive offers and discounts for our registered members -start
            saving!
          </p>
          {/* <CiBurger /> */}
          <p>
            Explore the diverse menu of dishes from experts, all to keep you
            healthy.
          </p>
          <img src={registerimage} alt="" />
        </div>
      </div>
      <div className="EmptyBox"></div>
      <Footer />
    </>
  );
}
