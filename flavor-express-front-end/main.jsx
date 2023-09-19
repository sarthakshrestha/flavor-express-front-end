import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

if (!localStorage.getItem("FlavorExpressUserToken")) {
  //Initial localStorage FlavorExpressUserToken value set to empty string if null.
  localStorage.setItem("FlavorExpressUserToken", JSON.stringify(""));
}

//axios request interceptor
axios.interceptors.request.use((request) => {
  request.headers["Authorization"] =
    "Bearer " + JSON.parse(localStorage.getItem("FlavorExpressUserToken"));
  return request;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
