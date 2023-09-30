import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sideBar/sideBar";
import "./adminDashboard.css";
import Header from "../../sharedComponents/header/Header";
import axios from "axios";

export default function AdminDashboard() {

    const [data, setData] = useState([]);

    const [count, setCount] = useState([]);

    useEffect(() => {
        fetchCount();
    }, []);

    // Function to fetch and populate data
    const fetchCount = () => {
        axios.get('http://localhost:8081/counts')
            .then((response) => {
                setCount(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch and populate data
    const fetchData = () => {
        axios.get('http://localhost:8081/customers')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (<>
            <div className="center-container">
                <div className="s-view">
                    <Sidebar/>
                </div>
                <div className="at_a_glance">
                    <div className="inner">
                        <i className="fa-solid fa-money-check-dollar"></i>
                        <h3>Revenue</h3>
                        <p>{count ? count.revenue : 'Loading...'}</p>
                    </div>
                    <div className="inner">
                        <i className="fas fa-users"></i>
                        <h3>Customers</h3>
                        <p>{count ? count.customers : 'Loading...'}</p>
                    </div>
                    <div className="inner">
                        <i className="fa-solid fa-utensils"></i>
                        <h3>Restaurants</h3>
                        <p>{count ? count.restaurants : 'Loading...'}</p>
                    </div>
                    <div className="inner">
                        <i className="fa-solid fa-motorcycle"></i>
                        <h3>Drivers</h3>
                        <p>{count ? count.drivers : 'Loading...'}</p>
                    </div>
                </div>
                <div className="info_admin">
                    <br/>
                    <h1 className="c-title">Recently Joined</h1>
                    <br/>
                    <table className="u-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.slice(0,5).map((customer) => (
                            <tr key={customer.customer_id}>
                                <td>{customer.customer_id}</td>
                                <td>{customer.fullName}</td>
                                <td>{customer.address}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNumber}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>);
}
