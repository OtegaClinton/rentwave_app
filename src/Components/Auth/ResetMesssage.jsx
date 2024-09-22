import React from 'react';
import "./ResetMessage.css";
;import logo from "../../assets/logo.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import mail from '../../assets/mail.png'

const ResetMesssage = () => {
  return (
    <div className='ResetMessageContainer'>
         <Link to="/" className="Logo-ResetMessage">
                <img src={logo} alt="logo" style={{ width: "200px",height:"100px%",objectFit: "contain" }} />
              </Link>
                <img src={mail} alt="mail" />
              <div className='resetText'>
                    <h4>We’ve sent you an email</h4>
                    <p>Click the link we’ve sent to your email. If you don’t see it, please be sure to check your spam folder.</p>

                   <div className='resetTextDown'><IoIosArrowDropleft className='rmIcon'/>  <p>back to <span><Link to='/Login' style={{color:"royalBlue"}}>Login</Link></span></p></div>
              </div>
      
    </div>  )
}

export default ResetMesssage
