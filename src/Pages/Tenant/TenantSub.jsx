import React from 'react'
import "./TenantSub.css"
import { IoNotificationsCircleSharp } from "react-icons/io5";
import SubImage from "../../assets/download 16.png"
const TenantSub = () => {
  return (
    <div className='TenantSubContainer'>
    <div className="TenantSubContainerHeader">
    
         <div className="TenantSubContainerright">
         <h3>Subscription</h3>
         <p>See all your subscriptions here</p>
         </div>
         <div className="TenantSubContainerLeft">
         <IoNotificationsCircleSharp className="menuIcons" style={{cursor:"pointer"}}/>
         </div>
    </div>
    <div className="TenantsubDown">
      <div className="TextImagesub">
      <h3>Oh Snap! there's nothing here</h3>
    <div className="SubImages">
        <img src={SubImage} alt="" />
    </div>
    <h3 style={{fontWeight:"400"}}>It looks like you don’t have any subscription yet</h3>
      </div>

    </div>
  </div>
  )
}

export default TenantSub