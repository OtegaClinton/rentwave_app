import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const userData = JSON.parse(userInfo);
    const userInfo = localStorage.getItem("userInfo");
    const nav = useNavigate();
    const handleLogoutClick = () => {
        setShowLogoutPopup(true);
      };
    
      const handleLogoutConfirm = async () => {
        const url = "https://rentwave.onrender.com/api/v1/logout";
        const token = localStorage.getItem("userToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        try {
          await axios.post(url, {}, config);
          localStorage.removeItem("userInfo");
          localStorage.removeItem("userToken");
          toast.success("Logout successful");
          nav("/");
        } catch (error) {
          toast.error("Logout failed. Please try again.");
        } finally {
          setShowLogoutPopup(false);
        }
      };
    
      const handleLogoutCancel = () => {
        setShowLogoutPopup(false);
      };
    
      useEffect(() => {
        if (!userData) {
          nav("/");
        }
      }, [userData, nav]);
    

    return (
        <div className="Logoutmenu1">
            <nav style={{ gap: "20px", display: "flex", cursor: "pointer" }} onClick={handleLogoutClick}>
                <AiOutlineLogout className="menuIcon" />
                <p style={{ fontSize: "25px", color: "black", display: "flex", alignItems: "center" }}>
                    Logout
                </p>
            </nav>

            {showLogoutPopup && (
                <div className="popup1">
                    <p style={{ color: "white", width: "100%", display: "flex", justifyContent: "center" }}>
                        Are you sure?
                    </p>
                    <div className="popup-text">
                        <p onClick={handleLogoutConfirm} style={{ cursor: "pointer", color: "green" }}>Yes</p>
                        <p onClick={handleLogoutCancel} style={{ cursor: "pointer", color: "red" }}>No</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
