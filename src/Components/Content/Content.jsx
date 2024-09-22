"use client"
import React, { useEffect } from "react"
import "./Content.css"
import content1 from "../../assets/content1.png";
import content2 from "../../assets/content2.png";
import content3 from "../../assets/content3.png";
import content4 from "../../assets/content4.png"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Content = () => {
  useEffect(() =>{
    AOS.init()
  },{})
  return (
    <div className="ContentContainer">

        <div className="content" data-aos-duration="2000">
          <div className="content-block" data-aos="fade-down" data-aos-duration="2000">
            <h5>Get Paid Faster</h5>
            <p>Tenants are 62% more likely to pay on-time when using
digital payments versus checks and cash. PayRent makes
paying rent fast and easy for your renters. Getting started
takes just a few minutes and your renters will enjoy the
convenience of paying their rent from any connected device
with their bank account or credit card. Payments can even be
scheduled in advance to ensure on-time delivery.</p>
            <button className="content-btn" data-aos="fade-down" data-aos-duration="2000"><Link to="/Signup">Get Started</Link></button></div>
          <div className="content-img" data-aos="fade-down"  data-aos-duration="1000"><img src={content1} alt="png" /></div>
          </div>
        <div className="content2" data-aos-duration="2000">
        <div className="content-img" data-aos="fade-down"  data-aos-duration="1000"><img src={content2} alt="png"/></div>
          <div className="content-block" data-aos="fade-down" data-aos-duration="2000">
            <h5>Save Time and Money</h5>
            <p>If you’re confused by the complexity and cost of most
property management software you’re not alone. Our
intuitive landlord dashboard makes it easy to see occupancy
rates, tenant balances, and upcoming charges and payments.
Downloadable reports are compatible with virtually all
accounting systems.
Designed with independent landlords in mind, there are no
hidden fees or a minimum number of units.</p>
            <button className="content-btn" data-aos="fade-down" data-aos-duration="2000"><Link to="/Signup">Explore</Link></button></div>
       </div>
        <div className="content" data-aos-duration="2000">
          <div className="content-block" data-aos="fade-down" data-aos-duration="2000">
            <h5>Protect Your Privacy</h5>
            <p>Rent wave is a secure way to accept electronic rent payments
while maintaining privacy and safety. Accept credit cards, debit cards or
bank transfers from any Nigeria-based bank or credit union
without giving away any personal information to tenants.</p>
            <button className="content-btn" data-aos="fade-down" data-aos-duration="2000"><Link to="/Signup">Click Here</Link></button></div>
            <div className="content-img" data-aos="fade-down"  data-aos-duration="1000"><img src={content3} alt="png" /></div></div>
        <div className="content2" data-aos-duration="2000">
        <div className="content-img" data-aos="fade-down"  data-aos-duration="1000"><img src={content4} alt="png" /></div>
          <div className="content-block" data-aos="fade-down" data-aos-duration="2000">
            <h5>Attract Great Tenants</h5>
            <p>Getting paid on time tops the list of things that keep most
landlords and property managers up at night. Not only do we
make paying rent easier for tenants, but we reward them
when they pay on time.</p>
            <button className="content-btn" data-aos="fade-down" data-aos-duration="2000"><Link to="/Signup">Join</Link></button></div>
          </div>
      <div className="content-down" data-aos="fade-down" data-aos-duration="2000">
        <h2>Join thousands of independent landlords who made paying rent online simpler, safer and more rewarding.</h2>
        <p>Several service plans are available so you can choose the best fit for your business. Signing up takes just a few minutes and we’ll walk you through the process step by step. Click On the button below to get started.</p>
        <div className="content-btn1" data-aos="fade-down" data-aos-duration="2000">Get Started</div>
      </div>
    </div>
  )
}

export default Content
