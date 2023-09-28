import React, {useEffect, useState} from "react";
import Sidebar from "../sideBar/sideBar";
import "./driverView.css";
import axios from "axios";

export default function AllDrivers() {

    // State variable to control the visibility of the add driver popup
    const [showAddDriverPopup, setShowAddDriverPopup] = useState(false);

    // State variables to store driver details
    const [driverName, setDriverName] = useState("");
    const [driverEmail, setDriverEmail] = useState("");
    const [driverPassword, setDriverPassword] = useState("");
    const [driverAddress, setDriverAddress] = useState("");
    const [driverPhoneNumber, setDriverPhoneNumber] = useState("");

    // Function to toggle the add driver popup
    const toggleAddDriverPopup = () => {
        setShowAddDriverPopup(!showAddDriverPopup);
    };

    // Function to handle form submission
    const handleAddDriver = () => {
        // Post data
        const registerData = {
            email: driverEmail,
            password: driverPassword,
            name: driverName,
            location: driverAddress,
            phoneNumber: driverPhoneNumber,
        };

        axios
            .post("http://localhost:8081/deliverydrivers", registerData)
            .then((response) => {
                console.log(response.data);
                fetchData();
            })
            .catch((error) => {
                console.error(error);
            });

        // Close the popup
        toggleAddDriverPopup();
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch and populate data
    const fetchData = () => {
        axios.get('http://localhost:8081/deliverydrivers')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Function to delete a row
    const deleteRow = (driver_id) => {
        // Make a DELETE request to your backend API to delete the record with the given ID
        axios.delete(`http://localhost:8081/deliverydrivers/${driver_id}`)
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
                    <Sidebar />
                </div>

                <div className="driver_info_admin">
                    <div className="driver_header">
                        <h1 className="d-title">Registered Drivers</h1>
                    </div>
                    <table className="d-table">
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
                        {data.map((drivers) => (
                            <tr key={drivers.driver_id}>
                                <td>{drivers.driver_id}</td>
                                <td>{drivers.name}</td>
                                <td>{drivers.location}</td>
                                <td>{drivers.email}</td>
                                <td>{drivers.phoneNumber}</td>
                                <td><button className="btn-delete" onClick={() => deleteRow(drivers.driver_id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button className="add-driver-button" onClick={toggleAddDriverPopup}>
                        Add Driver
                    </button>
                </div>
            </div>
            {showAddDriverPopup && (
                <div className="dr-popup">
                    {/* Add Driver Form */}
                    <h2>Add Driver</h2>
                    <form onSubmit={handleAddDriver}>
                        <label htmlFor="driverName">Driver Name:</label>
                        <input
                            type="text"
                            id="driverName"
                            name="driverName"
                            value={driverName}
                            onChange={(e) => setDriverName(e.target.value)}
                            required
                        />

                        <label htmlFor="driverEmail">Email:</label>
                        <input
                            type="email"
                            id="driverEmail"
                            name="driverEmail"
                            value={driverEmail}
                            onChange={(e) => setDriverEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="driverPassword">Password:</label>
                        <input
                            type="password"
                            id="driverPassword"
                            name="driverPassword"
                            value={driverPassword}
                            onChange={(e) => setDriverPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="driverAddress">Address:</label>
                        <input
                            type="text"
                            id="driverAddress"
                            name="driverAddress"
                            value={driverAddress}
                            onChange={(e) => setDriverAddress(e.target.value)}
                            required
                        />

                        <label htmlFor="driverPhoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="driverPhoneNumber"
                            name="driverPhoneNumber"
                            value={driverPhoneNumber}
                            onChange={(e) => setDriverPhoneNumber(e.target.value)}
                            required
                        />

                        <button className="add-driver-button" type="submit">
                            Add Driver
                        </button>
                    </form>
                    <button className="close-button" onClick={toggleAddDriverPopup}>
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}

