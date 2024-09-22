import React, { useState, useEffect } from "react";
import "./Tenantsettings.css";
import { FaCamera } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const TenantSettings = () => {
  const [showImg, setShowImg] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  // Fetch tenant data from localStorage when the component mounts
  useEffect(() => {
    const tenantData = JSON.parse(localStorage.getItem("userProfile"))?.tenant;
    if (tenantData) {
      setFormData({
        firstName: tenantData.firstName || "",
        lastName: tenantData.lastName || "",
        phoneNumber: tenantData.phoneNumber || "",
        profilePicture: tenantData.profilePicture?.pictureUrl || null,
      });
      setShowImg(tenantData.profilePicture?.pictureUrl || null);
    }
  }, []);

  const posting = (e) => {
    const file = e.target.files[0];
    const myImage = URL.createObjectURL(file);
    setShowImg(myImage);
    setFormData({ ...formData, profilePicture: file });
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://rentwave.onrender.com/api/v1/updateprofile";
    const apiData = new FormData();
    apiData.append("firstName", formData.firstName);
    apiData.append("lastName", formData.lastName);
    apiData.append("phoneNumber", formData.phoneNumber);
    
    if (formData.profilePicture instanceof File) {
      apiData.append("profilePicture", formData.profilePicture);
    }
  
    console.log("Submitting profile data:", apiData);
  
    try {
      const response = await axios.put(url, apiData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      localStorage.setItem("userProfile", JSON.stringify(response.data));
      alert("Profile updated successfully!");
      setLoading(false);
      handleClose();
    } catch (error) {
      console.error("Error updating profile:", error.response);
      toast.error(error.response?.data?.errors || "An error occurred while updating your profile.");
      setLoading(false);
    }
  };
  

  return (
    <>
    <div className="AcctSettingCon">
      <div className="AcctSettingsWrapper">
        <div className="AcctSettingsHeader">
          <h3 className="CloseButtonPro" onClick={handleClose}>
            <IoArrowBack style={{ height: "45px", width: "50px" }} />
            Back
          </h3>
          <h3
            style={{ width: "80%", display: "flex", justifyContent: "center" }}
          >
            Account Setting
          </h3>
        </div>
        <div className="AcctSettingsDown">
          <div className="AcctProfile">
            <div className="Pics">
            {showImg ? (
    <img src={showImg} alt="Profile" />
  ) : (
    <FaRegUserCircle style={{ height: "100px", width: "100px", color: "grey" }} />
  )}
              <div className="UploadIcon">
                <input type="file" id="i" hidden onChange={posting} />
                <label htmlFor="i" style={{ width: "max-content" }}>
                  <FaCamera
                    style={{
                      height: "30px",
                      width: "40px",
                      position: "absolute",
                      bottom: "-5px",
                      right: "0px",
                      cursor: "pointer",
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="AcctInputContainer">
            <form
              action=""
              onSubmit={handleSubmit}
              style={{ height: "100%", width: "100%" }}
            >
              <div className="AcctInput">
                <p>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  // required
                />
              </div>
              <div className="AcctInput">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  // required
                />
              </div>
              <div className="AcctInput">
                <p>Phone Number</p>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  // required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  height: "8%",
                  width: "45%",
                  borderRadius: "10px",
                  backgroundColor: loading ? "#888" : "#4D86DB",
                  cursor: loading ? "not-allowed" : "pointer",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                {loading ? "Loading..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default TenantSettings;
