// import React, { useEffect, useState } from 'react'
// import "../Tenant/Tenantsettings.css"
// import './LandlordProfile.css'
// import './Landlord.css'
// import { FaCamera } from "react-icons/fa6";
// import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
// import Address from './Address';
// import axios from 'axios';


// const LandlordProfile = () => {

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);


//   const[showImg,setShowImg]=useState();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     profilePicture: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const token = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWU4ODhjYzNmZmE2Zjk0MTIwZTI3YSIsInJvbGUiOiJMYW5kbG9yZCIsImlzQWRtaW4iOmZhbHNlLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjY5MTg1NzcsImV4cCI6MTcyNzAwNDk3N30.Ea0TAM8yjMPJKuPYF8eDVxlOBgJXDl21h6kNi1b6Z1M")
//   // const userToken = localStorage.getItem("userToken");

//   useEffect(() => {
//     const landlordData = JSON.parse(localStorage.getItem("userProfile"))?.landlord;
//     if (landlordData) {
//       setFormData({
//         firstName: landlordData.firstName || "",
//         lastName:landlordData.lastName || "",
//         phoneNumber: landlordData.phoneNumber || "",
//         profilePicture: landlordData.profilePicture?.pictureUrl || null,
//       });
//       setShowImg(landlordData.profilePicture?.pictureUrl || null);
//     }
//   }, []);

//      const posting = (e) => {
//     const file = e.target.files[0];
//     const myImage = URL.createObjectURL(file);
//     setShowImg(myImage);
//     setFormData({ ...formData, profilePicture: file });
//   };

//   const handleClose = () => {
//     navigate(-1);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const url = "https://rentwave.onrender.com/api//api/v1/update";
//     const apiData = new FormData();
//     apiData.append("firstName", formData.firstName);
//     apiData.append("lastName", formData.lastName);
//     apiData.append("phoneNumber", formData.phoneNumber);
//     if (formData.profilePicture instanceof File) {
//       apiData.append("profilePicture", formData.profilePicture);
//     }

//     try {
//       const response = await axios.put(url, apiData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       localStorage.setItem("userProfile", JSON.stringify(response.data));
//       alert("Profile updated successfully!");
//       setLoading(false);
//       handleClose();
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setLoading(false);
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div className="Pages">
//         <div className='AcctSetCon' >
//       <div className="AcctSettingsWrapper1">
//         <div className="AcctSettingsHeader">
//         <h3  className="CloseButtonPro" onClick={handleClose}><IoArrowBack  style={{height:"45px",width:"50px"}}/>
//         Back</h3>
//           <h3 style={{width:"80%",display:"flex",justifyContent:"center"}}>Account Setting</h3>
//         </div>
//         <div className="AcctSettingsDown">
//         <div className="AcctProfile">
//         <div className="Pics">
//         {showImg && <img src={showImg} alt="Profile" />}
//         <div className="UploadIcon">
//                 <input type="file" id='i' hidden onChange={posting} />
//                 <label htmlFor="i" style={{width:"max-content"}}>
//                 <FaCamera style={{height:"20px",
//         width:"30px",position:"absolute",bottom:"-5px",
//           right:"0px",cursor:"pointer"}}/>
//                 </label>
//                 </div>


//         </div>

//       </div>
//       <div className="AcctInputContainer1">
//       <form 
//         style={{ height: "100%", width: "100%" }} 
//         action=""
//         onSubmit={handleSubmit} 
//         >
//           <div className="naming">
//             <div className="fullname">
//                 <p>First Name</p>
//                 <p>Last Name</p>
//             </div>
//             <div className="write">
//                 <input 
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   required 
//                 />
//                 <input 
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   required 
//                 />
//             </div>
//           </div>
//           <div className="AcctInput">
//             <p> Email Address</p>
//           <input 
//             type="email" 
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           </div>
//           <div className="AcctInput">
//             <p>Phone Number</p>
//             <input 
//               type="number" 
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required 
//             />
//           </div>
//           <div className="AcctInputdown">
//             <div className="Acctgender">
//             <p>Gender</p>
//           <select  className="select" name="Gender" id="">
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//           </select>
//           </div>
//             </div>

//             <button 
//         type="submit"
//         disabled={loading}
//         className='Edit' 
//         style={{
//           height: "8%",
//           width: "45%",
//           borderRadius: "10px",
//           backgroundColor: loading ? "#888" : "#4D86DB",
//           cursor: loading ? "not-allowed" : "pointer",
//           border: "none",
//           color: "white",
//           fontSize: "18px",
//           }}>Save Changes</button> 
//       </form>
//       </div>
//         </div>
//       </div>
//     </div>
//     </div>

//   )
// }

// export default LandlordProfile


import React, { useEffect, useState } from 'react';
import "../Tenant/Tenantsettings.css";
import './LandlordProfile.css';
import './Landlord.css';
import { FaCamera } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LandlordProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showImg, setShowImg] = useState();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "", // Initialized email
        gender: "Male", // Initialized gender
        profilePicture: null,
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWU4ODhjYzNmZmE2Zjk0MTIwZTI3YSIsInJvbGUiOiJMYW5kbG9yZCIsImlzQWRtaW4iOmZhbHNlLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjY5MjQ4ODYsImV4cCI6MTcyNzAxMTI4Nn0.WObdHWSiucKMXKXqth2H1_WUdOxtbX-xxbtq3ctuf0k";

    useEffect(() => {
        const landlordData = JSON.parse(localStorage.getItem("userProfile"))?.landlord;
        if (landlordData) {
            setFormData({
                firstName: landlordData.firstName || "",
                lastName: landlordData.lastName || "",
                phoneNumber: landlordData.phoneNumber || "",
                gender: landlordData.gender || "Male", // Ensure gender is set
                profilePicture: landlordData.profilePicture?.pictureUrl || null,
            });
            setShowImg(landlordData.profilePicture?.pictureUrl || null);
        }
    }, []);

    const posting = (e) => {
        const file = e.target.files[0];
        if (file) {
            const myImage = URL.createObjectURL(file);
            setShowImg(myImage);
            setFormData({ ...formData, profilePicture: file });
        }
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
        const url = "https://rentwave.onrender.com/api/v1/update";
        const apiData = new FormData();
        apiData.append("firstName", formData.firstName);
        apiData.append("lastName", formData.lastName);
        apiData.append("phoneNumber", formData.phoneNumber);
        apiData.append("email", formData.email); // Added email to FormData
        apiData.append("gender", formData.gender); // Added gender to FormData
        if (formData.profilePicture instanceof File) {
            apiData.append("profilePicture", formData.profilePicture);
        }

        try {
            const response = await axios.put(url, apiData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            localStorage.setItem("userProfile", JSON.stringify(response.data));
            alert("Profile updated successfully!");
            handleClose();
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Pages">
            <div className='AcctSetCon'>
                <div className="AcctSettingsWrapper1">
                    <div className="AcctSettingsHeader">
                        <h3 className="CloseButtonPro" onClick={handleClose}>
                            <IoArrowBack style={{ height: "45px", width: "50px",padding:'10px' }} />
                            
                        </h3>
                        <h3 style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                            Account Setting
                        </h3>
                    </div>
                    <div className="AcctSettingsDown">
                        <div className="AcctProfile">
                            <div className="Pics">
                                {showImg && <img src={showImg} alt="Profile" />}
                                <div className="UploadIcon">
                                    <input
                                        type="file"
                                        id='i'
                                        hidden
                                        accept="image/*" // Limit file types to images
                                        onChange={posting}
                                    />
                                    <label htmlFor="i" style={{ width: "max-content" }}>
                                        <FaCamera style={{
                                            height: "20px",
                                            width: "30px",
                                            position: "absolute",
                                            bottom: "-5px",
                                            right: "0px",
                                            cursor: "pointer"
                                        }} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="AcctInputContainer1">
                            <form style={{ height: "100%", width: "100%" }} onSubmit={handleSubmit}>
                                <div className="naming">
                                    
                                    <div className="write">
                                        <div className='writeInput'>
                                        <p>First Name</p>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        </div>
                                        <div className='writeInput'>
                                        <p>Last Name</p>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="AcctInput">
                                    <p>Phone Number</p>
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="AcctInputdown">
                                    <div className="Acctgender">
                                        <p>Gender</p>
                                        <select className="select" name="gender" value={formData.gender} onChange={handleInputChange}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className='Edit'
                                    style={{
                                        height: "10%",
                                        width: "45%",
                                        borderRadius: "10px",
                                        backgroundColor: loading ? "#888" : "#4D86DB",
                                        cursor: loading ? "not-allowed" : "pointer",
                                        border: "none",
                                        color: "white",
                                        fontSize: "18px",
                                    }}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandlordProfile;
