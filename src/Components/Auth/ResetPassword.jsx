import React from 'react'
import "./ResetPassword.css"
import Logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  
  const nav=useNavigate()
  const handleClose = () => {
    nav(-1);
  };


  return (
    <div className='resetPasswordContainer'>
      <div className="resetPasswordWrapper">
        <div className="backIcon1" onClick={handleClose }>
         
          <p  onClick={handleClose} className='icon' style={{fontSize:'14px',textAlign:'center',fontWeight:'600',display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}> <IoArrowBackSharp style={{width: '25px', height:'25px'}} /></p>
        </div>
        <div className="ResetPasswordInputContainer">
          <div className="ResetPasswordInputWrapper">
            <div className="resetPasswordUp">

              <div className="logoContainer">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
              </div>
              <div className="keyImage">
                <div className="ImageBox">
                  <img src={image} alt="" />
                </div>

                <p>Reset Password?</p>
              </div>
              <p>Weldone you are one step away from resetting <br />
                your password</p>
            </div>

            <div className="resetPasswordDown">
              <div className="NewPassword">
                <div className='one'>
                  <p>New Password</p>
                  <input type="text" placeholder='New Password' required className='reset-input'/>
                </div>
                <div className='two'>
                  <p>Confirm New Password</p>
                  <input type="text" placeholder='Confirm Password' required  className='reset-input' />
                </div>
                <button><Link to='/ResetMessage' style={{color:"white"}}>Done</Link></button>
              </div>



             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword