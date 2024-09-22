import React, { useState } from "react";
import "./MainRequest.css";
import { IoImage } from "react-icons/io5";

const MainRequest = ({ closePopup }) => {
  const [showImg, setShowImg] = useState();
  const [formData, setFormData] = useState({
    requestFor: "",
    additionalInfo: "",
    availableDates: [
      { date: "", time: "" },
      { date: "", time: "" },
      { date: "", time: "" },
    ],
    phoneNumber: "",
    pictures: [],
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleDateChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDates = formData.availableDates.map((dateItem, i) =>
      i === index ? { ...dateItem, [name]: value } : dateItem
    );
    setFormData((prevData) => ({
      ...prevData,
      availableDates: updatedDates,
    }));
  };

  // Handle image upload
  const posting = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array

    // Generate URLs for image previews (for front-end display)
    const imagePreviews = files.map((file) => URL.createObjectURL(file));

    // Show the first image preview
    setShowImg(imagePreviews[0]);

    // Add all selected images (file objects) to the pictures array in formData
    setFormData((prevData) => ({
      ...prevData,
      pictures: [...prevData.pictures, ...files], // Append new files to the existing pictures array
    }));
  };

  const userToken = localStorage.getItem("userToken");
  console.log(localStorage.getItem("userToken"));
  const url = "https://rentwave.onrender.com/api/v1/request";

  // Handle form submission
  const submitRequest = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("requestFor", formData.requestFor);
    formDataToSend.append("additionalInfo", formData.additionalInfo);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("status", "Pending");
    formDataToSend.append("requestedDate", new Date().toISOString());

    // Append available dates
    formData.availableDates.forEach((dateItem, index) => {
      formDataToSend.append(`availableDates[${index}][date]`, dateItem.date);
      formDataToSend.append(`availableDates[${index}][time]`, dateItem.time);
    });

    // Append pictures
    formData.pictures.forEach((picture, index) => {
      formDataToSend.append(`pictures`, picture); // Backend can handle this as an array
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to submit request:", errorData);
        alert("Failed to submit request: " + errorData.message);
      } else {
        const responseData = await response.json();
        console.log("Request submitted successfully:", responseData);
        alert("Request submitted successfully");
        // Get the existing data from localStorage or initialize an empty array
        const existingRequests =
          JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

        // Push the new response data to the array
        existingRequests.push(responseData);

        // Save the updated array back to localStorage
        localStorage.setItem(
          "maintenanceRequests",
          JSON.stringify(existingRequests)
        );
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Error submitting request");
    }
    closePopup()
  };

  return (
    <div className="MainRequestPopupOverlay">
      <div className="MainRequestFormWrapper">
        <div className="MainRequestFormHeader">
          <h3 style={{ width: "95%" }}>Maintenance Request Form</h3>
          <h3 className="CloseButton" onClick={closePopup}>
            X
          </h3>
        </div>
        <form className="FormContainer" onSubmit={submitRequest}>
          <div className="reqInput">
            <p>WHAT ARE YOU MAKING A REQUEST FOR?</p>
            <input
              type="text"
              name="requestFor"
              value={formData.requestFor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="MoreReq">
            <p>KINDLY GIVE MORE INFORMATION ON YOUR REQUEST</p>
            <textarea
              name="additionalInfo"
              placeholder="Enter a short description of your request"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
          <div className="DateReq">
            <p>
              KINDLY PROVIDE 3 DATES AND TIMES YOU WOULD BE AVAILABLE FOR A
              VISIT
            </p>
            <div className="DateReqInput">
              {formData.availableDates.map((dateItem, index) => (
                <div className="daterow">
                  <div key={index} className="DateReqInputleft">
                    <input
                      type="date"
                      name="date"
                      value={dateItem.date}
                      onChange={(e) => handleDateChange(index, e)}
                      required
                    />
                  </div>
                  <div className="DateReqInputright">
                    <input
                      type="time"
                      name="time"
                      value={dateItem.time}
                      onChange={(e) => handleDateChange(index, e)}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reqPhone">
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="imagereq">
            <p>
              Kindly provide pictures relevant to the situation, if available
            </p>
            <div className="imgbox">
              <div className="uploadBox">
                {showImg && <img src={showImg} alt="Uploaded" />}
              </div>
              <div className="UploadIcon">
                <input
                  type="file"
                  id="i"
                  hidden
                  multiple
                  onChange={posting}
                  accept="image/png, image/jpeg"
                />
                <label htmlFor="i" style={{ width: "max-content" }}>
                  <IoImage
                    style={{ cursor: "pointer", width: "30px", height: "30px" }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="cancelButton" type="button" onClick={closePopup}>
              Cancel
            </button>
            <button className="submitButton" type="submit" > 
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainRequest;
