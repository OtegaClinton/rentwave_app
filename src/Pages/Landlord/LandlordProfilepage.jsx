import React from 'react';
import "./LandlordProfilepage.css";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const LandlordProfilepage = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1); 
    };

    const formData = JSON.parse(localStorage.getItem("userProfile"))?.landlord || {};
    const userInfo = localStorage.getItem("userInfo");
    const data = userInfo ? JSON.parse(userInfo) : {};

    const profilePicture = formData.profilePicture?.pictureUrl || "path/to/default/image.png"; // Replace with your actual default image path

    return (
        <div className='Pages'>
            <div className="ProfilePageCan">
                <div className="ProPageWrapper">
                    <div className="ProHeader">
                        <h3 className="CloseButtonPro" onClick={handleClose}>
                            <IoArrowBack style={{ height: "45px", width: "50px" }} />
                            Back
                        </h3>
                        <h3 style={{ width: "20%" }}>Profile</h3>
                        <Link to="/settings" style={{ width: "20%", justifyContent: "flex-end" }}>
                            <button className='Editbtn'>Edit</button>
                        </Link>
                    </div>
                    <div className="Propic">
                        <div className="theproPics" style={{ cursor: "pointer" }}>
                            <img src={formData.profilePicture || data.profilePicture || ""} alt="Profile" />
                        </div>
                    </div>
                    <div className="ProfDetail">
                        <ul>
                            <li>
                                <h3>Name:</h3>
                                <span>{`${formData.firstName || data.firstName || "N/A"} ${formData.lastName || data.lastName || "N/A"}`}</span>
                            </li>
                            <li>
                                <h3>Email address:</h3>
                                <span>{formData.email || data.email || "N/A"}</span>
                            </li>
                            <li>
                                <h3>Phone number:</h3>
                                <span>{formData.phoneNumber || data.phoneNumber || "N/A"}</span>
                            </li>
                            <li>
                                <h3>Gender:</h3>
                                <span>{formData.gender || data.gender || "N/A"}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandlordProfilepage;
