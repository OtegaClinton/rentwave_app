import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({scrollToSection}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); 



  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="headerContainer"  >
      <div className="Logo">
        <Link to="/" className="Logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="HeaderNav">
        <NavLink
          to="/"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
        >
          Home
        </NavLink>
        <div className="nav" onClick={() => scrollToSection('about')}>
          <NavLink
            to="/About_Us"
            className="nav"
            style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
          >
            About Us
          </NavLink>
        </div>
        <div className="nav" onClick={() => scrollToSection('values')}>
          <NavLink
            to="/About_Us"
            className="nav"
            style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
          >
            Our Value
          </NavLink>
        </div>
        <div className="nav" onClick={() => scrollToSection('contacts')}>
          <NavLink
            to="/About_Us"
            className="nav"
            style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
          >
            Contacts
          </NavLink>
        </div>
      </ul>
      <div className="btns">
        <Link to='/SignUp' className="btnHeader1">Sign Up</Link>
        <Link to='/Login' className="btnHeader">Log in</Link>
      </div>

     
      <div className="hamburger" onClick={toggleDropdown}>
        <GiHamburgerMenu className="hamburger-icon" />
      </div>

     
      {dropdownVisible && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <Link to="/" onClick={toggleDropdown}>Home</Link>
          <Link to="/About_Us" onClick={() => { toggleDropdown(); scrollToSection('about'); }}>About Us</Link>
          <Link to="/About_Us" onClick={() => { toggleDropdown(); scrollToSection('values'); }}>Our Value</Link>
          <Link to="/About_Us" onClick={() => { toggleDropdown(); scrollToSection('contacts'); }}>Contacts</Link>
          <Link to='/SignUp' className="dropdown-btn" onClick={toggleDropdown}>SignUp</Link>
          <Link to='/Login' className="dropdown-btn" onClick={toggleDropdown}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
