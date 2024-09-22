import React from "react";
import "./TenantProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const TenantProfile = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const tenantData = JSON.parse(localStorage.getItem("userProfile"))?.tenant;
  // const userToken = localStorage.getItem("userToken");
  const userInfo = localStorage.getItem("userInfo");
  const userData = JSON.parse(userInfo);
  console.log(userData)
  return (
    <div className="TenantProfilePage">
      <div className="TenantProfilePageWrapper">
        <div className="ProfileHeader">
          <h3 className="CloseButtonPro" onClick={handleClose}>
            <IoArrowBack style={{ height: "45px", width: "50px" }} /> Back
          </h3>
          <h3 style={{ width: "20%" }}>Profile</h3>
          <Link
            to="/TenantSettings"
            style={{ width: "20%", justifyContent: "flex-end" }}
          >
            <button>Edit</button>
          </Link>
        </div>
        <div className="Profilepic">
          <div className="Pics" style={{ cursor: "pointer" }}>
            {/* If profilePicture is available, display it; otherwise, show a default image */}
            {localStorage.getItem("userProfile") && JSON.parse(localStorage.getItem("userProfile")).tenant.profilePicture?.pictureUrl ? (
        <img
          src={JSON.parse(localStorage.getItem("userProfile")).tenant.profilePicture.pictureUrl}
          alt="Profile"
        />
      ) : (
        <FaRegUserCircle size={50} /> // Adjust size as needed
      )}
          </div>
        </div>
        <div className="ProfDetail">
          <ul>
            <li>
              <h3>Name:</h3>
              <span>{`${tenantData?.firstName || userData.firstName} ${
                tenantData?.lastName || userData.lastName
              }`}</span>
            </li>
            <li>
              <h3>Email address:</h3>
              <span>{tenantData?.email || userData.email}</span>
            </li>
            <li>
              <h3>Phone number:</h3>
              <span>{tenantData?.phoneNumber || userData.phoneNumber}</span>
            </li>
            <li>
              <h3>Gender:</h3>
              <span>{tenantData?.gender || "N/A"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TenantProfile;
