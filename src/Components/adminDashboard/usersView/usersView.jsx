import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../sideBar/sideBar";
import "./usersView.css";

function AllUsers() {
    const [data, setData] = useState([]);

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

    // Function to delete a row
    const deleteRow = (customer_id) => {
        // Make a DELETE request to your backend API to delete the record with the given ID
        axios.delete(`http://localhost:8081/customers/${customer_id}`)
            .then(() => {
                // If successful, re-fetch the data to update the table
                fetchData();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar/>
                </div>

                <div className="customer_info_admin">
                    <div className="customer_header">
                        <h1 className="c-title">Registered Customers of Flavor Express</h1>
                    </div>
                    <table className="u-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((customer) => (
                            <tr key={customer.customer_id}>
                                <td>{customer.customer_id}</td>
                                <td>{customer.fullName}</td>
                                <td>{customer.address}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNumber}</td>
                                <td><button className="btn-delete" onClick={() => deleteRow(customer.customer_id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AllUsers;
