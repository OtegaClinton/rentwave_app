import React, { useState } from 'react';
import "./ForgotPassword.css";
import Logo from "../../assets/logo.png";
import image from "../../assets/image.png";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
  const nav=useNavigate()
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 
  const handleClose = () => {
    nav(-1);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch('https://rentwave.onrender.com/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        nav('/ResetPassword')
      } else if (response.status === 404) {
        setLoading(false)
        toast.error("User with this email does not exist");
      } else {
        toast.error("An error occurred. Please try again.");
        setLoading(false)
      }
    } catch (err) {
      toast.error("Failed to send request. Please try again.");
      setLoading(false)
    }
  };

  return (
    <>
    <div className='resetPasswordContainer1'>
      <div className="resetPasswordWrapper1">
        <div className="backIcon1" onClick={handleClose}>
          <p className='icon' style={{ fontSize: '14px', textAlign: 'center', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
            <IoArrowBackSharp style={{ width: '25px', height: '25px' }} /> Go Back
          </p>
        </div>
        <div className="ResetPasswordInputContainer1">
          <div className="ResetPasswordInputWrapper1">
            <div className="resetPasswordUp1">
              <div className="logoContainer1">
                <div className="logo1">
                  <img src={Logo} alt="logo" />
                </div>
              </div>
              <div className="keyImage1">
                <div className="ImageBox1">
                  <img src={image} alt="key" />
                </div>
                <p>Forgot Password?</p>
              </div>
              <p>Enter the email address you used to register. <br /> We will send you an email with instructions to <br /> reset your password.</p>
            </div>
            <div className="resetPasswordDown1">
              <form onSubmit={handleSubmit}>
                <div className="NewPassword1">
                  <div className='one1'>
                    <p>Email Address</p>
                    <input
                      type="email"
                      placeholder='Enter your email'
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
            </div>
                <button type="submit" disabled={loading} className='forgetPasswordBtn'>
                   {loading ? 'Sending...' : 'Reset Password'}
                 
                </button>
              </form>
             

              </div>

            
            </div>
          </div>
        </div>
      </div>
    
    <Toaster/>
    </>
  );
}

export default ForgotPassword;
