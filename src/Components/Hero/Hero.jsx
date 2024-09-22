"use client";
import React, { useState, useEffect } from 'react';
import './Hero.css';
import dashboard from "../../assets/dashboard.png";
import logo from '../../assets/logo.png';
import devBen from '../../assets/devBen.png';
import { IoHome } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    AOS.init();

   
    const token = localStorage.getItem('authToken'); 
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  return (
    <div className="carousel" data-aos="fade-down" data-aos-duration="2000">
      <div className='content-center'>
        <h3>Simplify Rent Payment and Collection</h3>
        <h6>Streamline your rent payment process and keep track of every transaction</h6>
        <button className='btnHero' data-aos="fade-down" data-aos-duration="2000">
          <Link to="/Signup">Get Started</Link>
        </button>
      </div>

      {/* Hero Dashboard - Only display if logged in */}
      <div
        className='hero-dashboard'
        data-aos="fade-down"
        data-aos-duration="2000"
        // style={{ display: isLoggedIn ? 'flex' : 'none' }} // Conditional style based on login status
      >
        <div className='heroDashLeft'>
          <div className="heroLogo">
            <Link to="/" className="heroLogo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className='herodashProfile'>
            <Link style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} to=''>
              <img src={devBen} alt="" />
            </Link>
            <h5>Mr Johnson <br />
              <span style={{ fontWeight: '600' }}>Welcome</span></h5>
          </div>
          <div className='heroProfileIcon'>
            <IoHome style={{ width: '30px', height: '30px' }} className="menuIcon" />
            <span>
              <Link style={{ color: 'black', paddingLeft: '10px', fontSize: '18px' }} to=''>Home</Link>
            </span>
          </div>
        </div>
        <div className='heroDashRight'>
          <h4>Overview</h4>
          <p>Here’s a quick overview of what’s happening</p>
          <div className='heroDashCard'>
            <div className='heroCard'>
              <p>Space Booked</p>
              <h5>0</h5>
              <Link to='' style={{ color: 'blue' }}>See All</Link>
            </div>
            <div className='heroCard'>
              <p>Maintenance Request</p>
              <h5>0</h5>
              <Link to='' style={{ color: 'blue' }}>See All</Link>
            </div>
            <div className='heroCard'>
              <p>Active Subscription</p>
              <h5>0</h5>
              <Link to='' style={{ color: 'blue' }}>See All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
