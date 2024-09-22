import React, { useState, useRef } from "react";
import "./InviteTenant.css";
import { LuUpload } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InviteTenant = ({ isOpen, onClose, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    propertyId: "",
    leaseStart: "",
    leaseEnd: "",
    file: null,
    removeRenter: false,
    requireInsurance: false,
  });
console.log(formData)
  const fileInputRef = useRef(null);

  const chooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      console.log("Selected file:", file.name);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const token = localStorage.getItem("userToken");
    const url = "https://rentwave.onrender.com/api/v1/onboardtenant";
    console.log("Property ID:", formData.propertyId);
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      propertyId: formData.propertyId,
      leaseStart: formData.leaseStart,
      leaseEnd: formData.leaseEnd,
    };

    console.log("formData: ", body)

  

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, body, config);
      console.log(response);
      toast.success("Tenant onboarded successfully!", { autoClose: 3000 });
      onSubmit();
      onClose();
    } catch (error) {
      alert(error.response?.data?.errors)
      toast.error(error.response?.data?.errors, {
        autoClose: 3000,
      });
      console.error("Error onboarding tenant:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Invitation</h2>
        <p>
          Invite your renter to pay rent safely and <br /> simply
        </p>

        <div className="nameinput">
          <div className="words">
            <p>First Name</p>
            <p>Last Name</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="email">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="email">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="email">
          <p>Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="email">
          <p>Property Id</p>
          <input
            name="propertyId"
            value={formData.propertyId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="nameinput">
          <div className="words">
            <p>Lease start</p>
            <p>Lease end</p>
          </div>
          <div className="inputs">
            <input
              type="date"
              name="leaseStart"
              value={formData.leaseStart}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="leaseEnd"
              value={formData.leaseEnd}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="agree">
          <input
            type="checkbox"
            name="removeRenter"
            checked={formData.removeRenter}
            onChange={handleCheckboxChange}
          />
          <div className="p">
            Remove renter at end of lease.
            <RiErrorWarningFill className="icon" />
          </div>
        </div>

        <div className="agree">
          <input
            type="checkbox"
            name="requireInsurance"
            checked={formData.requireInsurance}
            onChange={handleCheckboxChange}
          />
          <div className="p">Require Renters Insurance</div>
        </div>

        <div className="Buttons">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button className="Button" onClick={chooseFile}>
            <LuUpload className="icon" /> Upload Lease
          </button>
          <button className="Button2" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Add"}
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default InviteTenant;
