"use client";
import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({ headerRef }) => {
    const scrollToHeader = () => {
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() =>{
      AOS.init()
    },{})
 
  return (
    <div className="FooterContainer">
      <div className="footer-content" data-aos="fade-down" data-aos-duration="2000">
        <div className="first" data-aos="fade-down" data-aos-duration="2000">
          <Link to="/" className="Logo">
            <img src={logo} alt="logo" />
          </Link>
          <p>Eliminate the hassle of manually remembering to pay rent and avoid costly late fees.</p>
        </div>
        <div className="second" data-aos="fade-down" data-aos-duration="2000">
          <h5>Resources</h5>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="third" data-aos="fade-down" data-aos-duration="2000">
          <h5>Company</h5>
          <Link to="/About_Us">About Us</Link>
          <Link to="/About_Us">Our Values</Link>
          <Link to="/About_Us">Contact Us</Link>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="copyright">&copy; 2024 RentWave Inc.</div>
        <div className="bottom-right">
          <p>Acceptable Use Policy</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <div className="top-btn" onClick={scrollToHeader} style={{ cursor: "pointer" }}>
            ↑
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
