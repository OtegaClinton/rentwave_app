import React from 'react'
import "./PropertyView1.css"
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const TenantProfile = ({ onClose }) => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    }
    return (
        <div className="TenantProfilePage">
            <div className="TenantProfilePageWrapper">
                <div className="ProfileHeader">
                    <h3 className="CloseButtonPro" onClick={handleClose}><IoArrowBack style={{ height: "45px", width: "50px" }} />
                    </h3>
                </div>
                <div className="ProfDetail1" style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <br />
                    <br />
                    <ul>
                        <li> <h3>Name:</h3><span> Mr Johnson</span></li>
                        <li><h3>Email address:</h3><span > Johnson1467@gamil</span></li>
                        <li>
                            <h3>Phone number:</h3><span> 09050164533</span></li>
                        <li> <h3>Amount:</h3><span> ₦1000000</span></li>
                        <li>  <h3>Reference no:</h3><span> T2376477</span></li>
                        <li>  <h3>Status:</h3><span> Paid</span></li>
                        <li>  <h3>Payment Method:</h3><span> card</span></li>
                        <li>  <h3>Date:</h3><span> 4/08/2022</span></li>
                        <li><h3>Time:</h3><span> 10:45am</span></li>
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default TenantProfile