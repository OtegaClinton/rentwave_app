import React, { useState } from "react";
// import "./MainRequest.css";
// import { IoImage } from "react-icons/io5";

// const MainRequest = ({ closePopup }) => {
//   const [showImg, setShowImg] = useState();
//   const [formData, setFormData] = useState({
//     requestFor: '',
//     additionalInfo: '',
//     availableDates: [
//       { date: '', time: '' },
//       { date: '', time: '' },
//       { date: '', time: '' },
//     ],
//     phoneNumber: '',
//     pictures: []
//   });

//   // Handle input changes for text, textarea, and phone number fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle date and time changes
//   const handleDateChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedDates = formData.availableDates.map((dateItem, i) =>
//       i === index ? { ...dateItem, [name]: value } : dateItem
//     );
//     setFormData((prevData) => ({
//       ...prevData,
//       availableDates: updatedDates,
//     }));
//   };

//   // Handle image upload
//   const posting = (e) => {
//     const file = e.target.files[0];
//     const myImage = URL.createObjectURL(file);
//     setShowImg(myImage);

//     // Add the image file to the pictures array
//     setFormData((prevData) => ({
//       ...prevData,
//       pictures: [...prevData.pictures, file],
//     }));
//   };

//   // Handle form submission
//   const submitRequest = async (e) => {
//     e.preventDefault();
    
//     const userToken = localStorage.getItem("userToken");
//     const url = "https://rentwave.onrender.com/api/v1/request";

//     const requestData = {
//       ...formData,
//       status: 'Pending',
//       requestedDate: new Date().toISOString(),
//     };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${userToken}`
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (response.ok) {
//         alert('Request submitted successfully');
//         closePopup();
//       } else {
//         alert('Failed to submit request');
//       }
//     } catch (error) {
//       console.error('Error submitting request:', error);
//       alert('Error submitting request');
//     }
//   };

//   return (
//     <div className="MainRequestPopupOverlay">
//       <div className="MainRequestFormWrapper">
//         <div className="MainRequestFormHeader">
//           <h3 style={{ width: "95%" }}>Maintenance Request Form</h3>
//           <h3 className="CloseButton" onClick={closePopup}>X</h3>
//         </div>
//         <form className="FormContainer" onSubmit={submitRequest}>
//           <div className="reqInput">
//             <p>WHAT ARE YOU MAKING A REQUEST FOR?</p>
//             <input
//               type="text"
//               name="requestFor"
//               value={formData.requestFor}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="MoreReq">
//             <p>KINDLY GIVE MORE INFORMATION ON YOUR REQUEST</p>
//             <textarea
//               name="additionalInfo"
//               placeholder="Enter a short description of your request"
//               value={formData.additionalInfo}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="DateReq">
//             <p>KINDLY PROVIDE 3 DATES AND TIMES YOU WOULD BE AVAILABLE FOR A VISIT</p>
//             <div className="DateReqInput">
//               {formData.availableDates.map((dateItem, index) => (
//                 <div key={index} className="DateReqRow">
//                   <input
//                     type="date"
//                     name="date"
//                     value={dateItem.date}
//                     onChange={(e) => handleDateChange(index, e)}
//                     required
//                   />
//                   <input
//                     type="time"
//                     name="time"
//                     value={dateItem.time}
//                     onChange={(e) => handleDateChange(index, e)}
//                     required
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="reqPhone">
//             <p>Phone Number</p>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="imagereq">
//             <p>Kindly provide pictures relevant to the situation, if available</p>
//             <div className="imgbox">
//               {showImg && <img src={showImg} alt="Uploaded" />}
//               <div className="UploadIcon">
//                 <input type="file" id="i" hidden onChange={posting} />
//                 <label htmlFor="i" style={{ width: "max-content" }}>
//                   <IoImage style={{ cursor: "pointer", width: "30px", height: "30px" }} />
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="buttons">
//             <button className="cancelButton" type="button" onClick={closePopup}>Cancel</button>
//             <button className="submitButton" type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MainRequest;



  {/* <div className="DateReqInput">
              <div className="DateReqInputleft">
                <input type="date"  value={adate} onChange={(e)=>setAdate(e.target.value)}/>
                <input type="date"  value={bdate} onChange={(e)=>setBdate(e.target.value)}/>
                <input type="date" value={cdate} onChange={(e)=>setCdate(e.target.value)} />
              </div>
              <div className="DateReqInputright">
                <input type="time"  value={atime} onChange={(e)=>setAtime(e.target.value)}/>
                <input type="time"  value={btime} onChange={(e)=>setBtime(e.target.value)}/>
                <input type="time"  value={ctime} onChange={(e)=>setCtime(e.target.value)}/>
              </div>
            </div> */}


              {/* <div className="imagereq">
            <p>
              Kindly provide pictures relevant to the situation, if available
            </p>
            <div className="imgbox">
              <textarea className="uploadBox"   name="pictures" value={formData.pictures} onChange={handleChange}>
                {showImg && <img src={showImg} alt="Uploaded" />}
              </textarea>

              <div className="UploadIcon">
                <input type="file" id="i" hidden onChange={posting} />
                <label htmlFor="i" style={{ width: "max-content" }}>
                  <IoImage
                    style={{ cursor: "pointer", width: "30px", height: "30px" }}
                  />
                </label>
              </div>
            </div>
          </div> */}

            //    const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setPayfield((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };
  // const [payfield,setPayfield]=useState({
  //   firstName:"",
  //   lastName:"",
  //   amount:"",
  //   paymentMethod:"",
  //   notes:""
  // })
  //   const makePayment = async (e) => {
  //     e.preventDefault(); // Prevent default form submission

  //     if (

  //       !firstName ||
  //       !lastName ||
  //       !amount ||
  //       !paymentMethod ||
  //       !notes
  //     ) {
  //       toast.error("All fields are required");
  //     }
  //      else {
  //       setLoading(true);
  //       const apiData = {
  //         firstName,
  //         lastName,
  //         amount,
  //         paymentMethod,
  //         notes,

  //       };
  //       const url = "https://rentwave.onrender.com/api/v1/payment/payRent";

  //       axios
  //         .post(url, apiData)
  //         .then((res) => {
  //           console.log(res);
  //           setLoading(false);
  //           toast.success("payment  successful. cehck email for receipt.");
  //           navigate("/TenantPayment");
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //           setLoading(false);
  //           toast.error("payment failed. Please try again.");
  //         });
  //     }
  //   };

  // return (
  //   <>
  //   <div className="PaymentPopupOverlay">
  //     <div className="PaymentFormWrapper">
  //     <div className="payFormHeader">
  //       <h3 className="CloseButton" onClick={closePopup}>X</h3>
  //       </div>
  //     <form action="" onSubmit={makePayment}>
  //       <div className="InputPayForm">
  //               <div className='payInput'>
  //                 <p>First Name</p>
  //                 <input type="text"
  //                 name='firstName'   value={payfield.firstName}
  //             onChange={handleChange}/>
  //               </div>
  //               <div className='payInput'>
  //                 <p>Last Name</p>
  //                 <input type="text"    name='lastName'   value={payfield.lastName}
  //             onChange={handleChange}/>
  //               </div>

  //               <div className='payInput'>
  //                 <p>Amount</p>
  //                 <input type="text"    name='amount'   value={payfield.amount}
  //             onChange={handleChange}/>
  //               </div>
  //               <div className='payInput'>
  //                 <p>Payment Method</p>
  //                 <select name="select" id="">
  //                 <option value="">select</option>
  //                   <option value="Bank Transfer" >Bank Transfer</option>
  //                   <option value="card">Card</option>
  //                 </select>
  //                 </div>
  //               <div className='payInput' >
  //                 <p>Notes <span>(optional)</span></p>
  //                 <input type="text"  style={{height:"65"}}   name='note'   value={payfield.notes}
  //             onChange={handleChange}/>
  //               </div>

  //               </div>
  //               <div className="payButton">
  //                   <button>pay</button>
  //               </div>
  //             </form>

  //     </div>
  //   </div>
  //   <Toaster/>
  //  </>
  // )import React, { useState } from "react";
// import "./PaymentPopUp.css";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const PaymentPopup = ({ closePopup }) => {
//   const [payData, setPayData] = useState({
//     firstName: "",
//     lastName: "",
//     amount: 0,
//     paymentMethod: "",
//     notes: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Handles input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPayData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const userToken = localStorage.getItem("userToken");
//   const userInfo = localStorage.getItem("userInfo");
//   const userData = JSON.parse(userInfo);
//   const UserEmail = userData?.email;

//   const paymentKey = import.meta.env.VITE_Public_Key;

//   // Function to handle payment submission
//   const payKorapay = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Check if all required fields are filled
//     if (!payData.firstName || !payData.lastName || !payData.amount || !payData.paymentMethod) {
//       toast.error("All fields are required");
//       return;
//     }

//     setLoading(true);

//     // Send input data to backend
//     const apiData = {
//       firstName: payData.firstName,
//       lastName: payData.lastName,
//       amount: payData.amount,
//       paymentMethod: payData.paymentMethod,
//       notes: payData.notes,
//     };

//     try {
//       const url = "https://rentwave.onrender.com/api/v1/payment/payRent";
//       const response = await axios.post(url, apiData, {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       });

//       // Initialize Korapay after the backend processes the data
//       window.Korapay.initialize({
//         key: paymentKey,
//         reference: `Omotolani_${Date.now()}`,
//         amount: payData.amount * 100, // amount in kobo
//         currency: "NGN",
//         customer: {
//           name: `${payData.firstName} ${payData.lastName}`,
//           email: UserEmail,
//         },
//         onSuccess: function (response) {
//           console.log(response);
//           toast.success("Payment successful. Check email for receipt.");

//           // Close the popup after the payment is successful
//           closePopup();
//         },
//         onError: function (error) {
//           console.error(error);
//           toast.error("Payment failed. Please try again.");
//         },
//       });

//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Error sending data to backend. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="PaymentPopupOverlay">
//         <div className="PaymentFormWrapper">
//           <div className="payFormHeader">
//             <h3 className="CloseButton" onClick={closePopup}>
//               X
//             </h3>
//           </div>
//           <form onSubmit={payKorapay}>
//             <div className="InputPayForm">
//               <div className="payInput">
//                 <p>First Name</p>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={payData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="payInput">
//                 <p>Last Name</p>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={payData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="payInput">
//                 <p>Amount</p>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={payData.amount}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="payInput">
//                 <p>Payment Method</p>
//                 <select
//                   name="paymentMethod"
//                   value={payData.paymentMethod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="Bank Transfer">Bank Transfer</option>
//                   <option value="Card">Card</option>
//                 </select>
//               </div>
//               <div className="payInput">
//                 <p>Notes <span>(optional)</span></p>
//                 <input
//                   type="text"
//                   name="notes"
//                   value={payData.notes}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="payButton">
//               <button type="submit" disabled={loading}>
//                 {loading ? "Processing..." : "Pay"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Toaster />
//     </>
//   );
// };

// export default PaymentPopup;
// import React, { useEffect, useState } from "react";
// import "./LandLordHome.css"; // Adjust the stylesheet as needed
// import { formatDateTime } from "../../Components/utils/utils";
// import axios from "axios";

// const LandlordHome = () => {
//   const [combinedData, setCombinedData] = useState([]);
//   const [view, setView] = useState("all"); // Track what to show ("all", "payments", "maintenance")

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");

//     const fetchPayments = async () => {
//       try {
//         const response = await axios.get("https://rentwave.onrender.com/api/v1/payments", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         return response.data.data;
//       } catch (error) {
//         console.error("Error fetching payments:", error);
//         return [];
//       }
//     };

//     const fetchMaintenanceRequests = async () => {
//       try {
//         const response = await axios.get("https://rentwave.onrender.com/api/v1/maintenance-requests", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         return response.data.data;
//       } catch (error) {
//         console.error("Error fetching maintenance requests:", error);
//         return [];
//       }
//     };

//     const fetchData = async () => {
//       const [payments, maintenanceRequests] = await Promise.all([
//         fetchPayments(),
//         fetchMaintenanceRequests(),
//       ]);

//       const combined = [
//         ...payments.map((item) => ({
//           type: "Payment",
//           amount: `₦${item.amount}`,
//           date: new Date(item.paymentDate),
//           method: item.paymentMethod,
//         })),
//         ...maintenanceRequests.map((item) => ({
//           type: item.requestFor,
//           amount: "N/A",
//           date: new Date(item.createdAt),
//           status: item.status || "Pending",
//         })),
//       ];

//       setCombinedData(combined);
//     };

//     fetchData();
//   }, []);

//   const handleSeeAllPayments = () => {
//     setView("payments");
//   };

//   const handleSeeAllMaintenance = () => {
//     setView("maintenance");
//   };

//   const handleSeeAllActivities = () => {
//     setView("all");
//   };

//   const filteredData =
//     view === "payments"
//       ? combinedData.filter((item) => item.type === "Payment")
//       : view === "maintenance"
//       ? combinedData.filter((item) => item.type !== "Payment")
//       : combinedData;

//   return (
//     <div className="LandlordHome">
//       <div>
//         <h1>Overview</h1>
//         <p>Here’s a quick overview of what’s happening</p>
//       </div>
//       <div className="LandlordDashBoardBox">
//         <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
//           <h1>Recent Activity</h1>
//           <div className="LandlordText" onClick={handleSeeAllActivities} style={{ cursor: "pointer" }}>
//             <h3>{combinedData.length}</h3>
//             <p>See All</p>
//           </div>
//         </div>
//         <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
//           <h1>Payment</h1>
//           <div className="LandlordText" onClick={handleSeeAllPayments} style={{ cursor: "pointer" }}>
//             <h3>{combinedData.filter(item => item.type === "Payment").length}</h3>
//             <p>See All</p>
//           </div>
//         </div>
//         <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
//           <h1>Maintenance Request</h1>
//           <div className="LandlordText" onClick={handleSeeAllMaintenance} style={{ cursor: "pointer" }}>
//             <h3>{combinedData.filter(item => item.type !== "Payment").length}</h3>
//             <p>See All</p>
//           </div>
//         </div>
//       </div>

//       <div className="LandlordRecentActivity">
//         <h1>Recent Activity</h1>
//         <div className="RecentActPage">
//           <table>
//             <thead>
//               <tr>
//                 <th>Type</th>
//                 <th>Amount</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Status/Method</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.length === 0 ? (
//                 <tr>
//                   <td colSpan="5">No recent activities</td>
//                 </tr>
//               ) : (
//                 filteredData.map((item, index) => {
//                   const { formattedDate, formattedTime } = formatDateTime(item.date);
//                   return (
//                     <tr key={index}>
//                       <td>{item.type}</td>
//                       <td>{item.amount}</td>
//                       <td>{formattedDate}</td>
//                       <td>{formattedTime}</td>
//                       <td>{item.method || item.status}</td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandlordHome;
