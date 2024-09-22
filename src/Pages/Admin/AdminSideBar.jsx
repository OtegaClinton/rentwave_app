import React, { useState } from "react";
import ben from "../../assets/devBen.png";
import { CiStar } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./Admin.css";

const SideBar = ({showLogoutPopup,setShowLogoutPopup}) => {
  const nav =useNavigate()
  const handleLogoutClick = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };
  const handleLogoutConfirm = () => {
    nav("/")
  };
  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="Sidebarwhole">
      <Link to="/">
        <div className="LogoContainer">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </Link>

      <div className="Profile">
        <div className="Pics">
          <img src={ben} alt="Profile" />
        </div>
        <p>DevBen</p>
        <h3>Welcome</h3>
      </div>

      <div className="MenuContainer">
        <div className="MenuWrapper">
          <nav >
            <IoHome className="menuIcon" />
            <NavLink to="/AdminHome" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Home
            </NavLink>
          </nav>
          <nav >
            <GiFamilyHouse className="menuIcon" />
            <NavLink to="/AdminLandlord" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Landlords
            </NavLink>
          </nav>
          <nav>
           <FaPeopleRoof className="menuIcon"/>
            <NavLink to="/AdminTenant" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Tenants
            </NavLink>
          </nav>
          <nav>
           <CiWallet  className="menuIcon"/>
            <NavLink to="/AdminPayment" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Payments
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="Logoutmenu">
        <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
          <AiOutlineLogout className="menuIcon" />
          <p style={{ fontSize: "25px", color: "black", display: "flex", alignItems: "center", cursor: "pointer" }}>
            Logout
          </p>
        </nav>

        {showLogoutPopup && (
          <div className="popup">
            <p style={{color:"white",width:"100%",display:"flex",justifyContent:"center"}}>Are you sure?</p>
            <div className="popup-text">
              <p onClick={handleLogoutConfirm}>Yes</p>
              <p onClick={handleLogoutCancel}>No</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
