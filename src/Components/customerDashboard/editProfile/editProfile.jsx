import React, { useState } from "react";
import "./editProfile.css";
import Sidebar from "../../adminDashboard/sideBar/sideBar";
import CustomerSidebar from "../customerSidebar/customerSidebar";

function EditProfile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
    });

    return (
        <div>
            <CustomerSidebar />
            <div className="edit_profile">
                <div className="top-s">
                    <h1>Make Changes to your Profile</h1>
                </div>
                <div className="edit_section">
                    <h3>Edit Profile</h3>
                    <div className="input_fields">
                        <label>First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            // onChange={handleInputChange}
                        />
                        <label>Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            // onChange={handleInputChange}
                        />
                        <label>Email Address</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            value={formData.email}
                            // onChange={handleInputChange}
                        />
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                            // onChange={handleInputChange}
                        />
                        <label>Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Address"
                            value={formData.address}
                        />
                        <label>Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="buttons">
                        <button className="save_change" type="submit">
                            Save Changes
                        </button>
                        <button className="discard_change">Discard Changes</button>
                    </div>
                </div>
                <form className="update_form">
                    <div className="image_change">
                        {/*<img src={placeholder} alt="" />*/}
                        <h2>Upload New Profile Avatar</h2>
                        <br/>
                        <br/>
                        <input
                            type="file"
                            accept="image/*"
                            // onChange={handleImageUpload}
                            className="upload-input" // Added class for styling
                        />
                        <br/>
                        <button className="upload">Upload</button>
                    </div>
                </form>
                {/* <p className="pls">Please do not update the existing email</p> */}
            </div>
        </div>
    );
}

export default EditProfile;
