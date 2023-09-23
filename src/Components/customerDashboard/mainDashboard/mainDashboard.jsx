import React from "react";
import ReactDOM from "react-dom"
import CustomerSidebar from "../customerSidebar/customerSidebar";

export default function MainDashboard(){
    return(<>
        <CustomerSidebar/>
            <div className="c-dash-content">

            </div>
        </>
    );
}