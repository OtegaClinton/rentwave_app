import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackSharp, IoEye, IoEyeOff } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";
// import { toast, Toaster } from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";
import logo from "../../assets/logo.png";

const Signup = () => {
  const [seePassword, setSeePassword] = useState(true);
  const [seePassword2, setSeePassword2] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setSeePassword(!seePassword);
  };
  const togglePasswordVisibility2 = () => {
    setSeePassword2(!seePassword2);
  };

  // Handle form submission
  const register = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Register button clicked"); // Check if the function is called

    // Validate the input fields
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !confirmPassword
    ) {
      toast.error("All fields are required");
      console.log("Some fields are missing");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      console.log("Passwords do not match");
    } else {
      try {
        setLoading(true); // Set loading state to true
        console.log("Loading state:", loading); // Check loading state
        
        const apiData = {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          confirmPassword,
        };

        const url = "https://rentwave.onrender.com/api/v1/signup";

    
        const res = await axios.post(url, apiData);
        console.log("API response:", res);
        const userData = res.data.data;
        const userToken = res.data.token;
  
        localStorage.setItem("userInfo", JSON.stringify(userData));
        localStorage.setItem("userToken", userToken);
       useEffect(() => {
        userData
       }, [])
       
        setLoading(false);
        toast.success(res.data.message);
        // alert(res.data.message)
        setTimeout(()=>{
          navigate("/Login");

        },4000)
      } catch (error) {
        setLoading(false); 
        console.error("Error during signup:", error);
  
   
        if (error.response && error.response.data && error.response.data.message) {
          
          toast.error(error.response.data.message);
        } else {
         
          toast.error("Sign up failed. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <div className="SignUpContainer">
        <p
          onClick={() => navigate("/")}
          style={{
            fontSize: "14px",
            width: "20%",
            position: "absolute",
            top: "10px",
            left: "5px",
            textAlign: "center",
            display: "flex",
            justifyContent: "flexStart",
            alignItems: "center",
            color: "black",
            cursor: "pointer",
          }}
        >
          <IoArrowBackSharp className="icon" style={{ width: "20px" }} />
        </p>

        <div className="firstSide">
          <form className="SignUpCenter" onSubmit={register}>
            <div className="topLogo">
              <div className="Logo-signup">
                <Link to="/" className="Logo-signup">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "70%", height: "100%", objectFit: "contain" }}
                  />
                </Link>
              </div>
              <h4 style={{ fontSize: "14px", width: "100%", marginBottom: "50px" }}>
                Sign up your business on Rent Wave
              </h4>
            </div>

            <div className="userinfo">
              <h4>User Information</h4>
              <p>This information will be used to create your account.</p>
            </div>

            <div className="nameContainer">
              <div className="Name">
                <h5>First Name</h5>
                <input
                  type="text"
                  name="firstName"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="Name">
                <h5>Last Name</h5>
                <input
                  type="text"
                  name="lastName"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="info">
              <h5>Email</h5>
              <input
                type="email"
                name="email"
                className="input1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="info">
              <h5>Phone Number</h5>
              <div
                className="input1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="flag"
                  style={{
                    width: "10%",
                    height: "100%",
                    paddingInline: "6px",
                    borderRight: "2px solid #e6e7e9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReactCountryFlag
                    countryCode="NG"
                    svg
                    style={{ width: "16px", height: "16px" }}
                  />
                </div>
                <input
                  style={{
                    width: "90%",
                    height: "100%",
                    borderLeft: "1px solid black",
                    border: "none",
                    fontSize: "12px",
                  }}
                  type="number"
                  name="phoneNumber"
                  placeholder="+234"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="info">
              <h5>Password</h5>
              <div className="passkey">
                <input
                  type={seePassword ? "password" : "text"}
                  className="input2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {seePassword ? (
                  <IoEye className="icon" onClick={togglePasswordVisibility} />
                ) : (
                  <IoEyeOff className="icon" onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>

            <div className="info">
              <h5>Confirm Password</h5>
              <div className="passkey">
                <input
                  type={seePassword2 ? "password" : "text"}
                  className="input2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {seePassword2 ? (
                  <IoEye className="icon" onClick={togglePasswordVisibility2} />
                ) : (
                  <IoEyeOff className="icon" onClick={togglePasswordVisibility2} />
                )}
              </div>
            </div>

            <div className="terms">
              <input
                style={{
                  width: "12px",
                  height: "12px",
                  border: "2px solid #e6e7e9",
                }}
                type="checkbox"
                required
              />
              <span className="termsText" >
                I agree with RentWave, and the collection and processing of my
                personal data in accordance with RentWave
              </span>
            </div>

            <button className="signupBtn" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign-Up"} 
            </button>

            <p style={{ fontSize: "12px", textAlign: "center" }}>
              Already have an account?{" "}
              <span style={{ color: "royalblue", cursor: "pointer" }}>
                <Link style={{color:'royalblue'}} to="/Login">Log in</Link>
              </span>
            </p>

            <p style={{ fontSize: "12px", textAlign: "center" }}>
              By creating an account you automatically agree to RentWave's
            </p>
            <span
              style={{
                color: "royalblue",
                fontSize: "12px",
                cursor: "pointer",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Terms and Conditions
            </span>
          </form>
        </div>

        <div className="secondSide">
          <div className="Logo">
            <Link to="/" className="Logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h4>Sign up your business on Rent Wave</h4>
          <p>Manage Rent Payment With Ease</p>
        </div>
      </div>

      {/* <Toaster/> */}
      <ToastContainer />
    </>

  );
};

export default Signup;
