import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import "./Tenant.css"
const TenantPrivate = () => {
  return (
    
      <div className="tenantPage">
        <div className="tenantLeft">
          <SideBar />
        </div>
        <div className="tenantRight" >
          <div className="tenantRightWrapper">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </div>
      </div>
    
    // <>
    // {
    //     tenant == "true"?
    //     <Outlet/>
    //     :<Navigate to={"/Login"}/>
    // }
    // </>
  )
}

export default TenantPrivate