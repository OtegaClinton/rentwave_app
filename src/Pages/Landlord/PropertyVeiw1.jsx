import React from 'react'
import "./PropertyView1.css"
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
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
                        <li> <h3>Property Name:</h3><span> Mr Johnson</span></li>
                        <li><h3>Locations:</h3><span >lekki</span></li>
                        <li>
                            <h3>Property Type:</h3><span> condo</span></li>
                        <li> <h3>Price:</h3><span> ₦1000000</span></li>
                        <li>  <h3>Amenities:</h3><span> football pitch</span></li>
                        <li>  <h3>Bedrooms:</h3><span> 4</span></li>
                        <li>  <h3>Bathroms:</h3><span> 5</span></li>
                        <li>  <h3>Description:</h3><span> optional</span></li>
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default TenantProfile