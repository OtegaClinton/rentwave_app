import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminSideBar  from './AdminSideBar'

const AdminPrivate = ({showLogoutPopup,setShowLogoutPopup}) => {
  return (
    <div className="tenantPage">
        <div className="tenantLeft">
          <AdminSideBar showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup}/>
        </div>
        <div className="adminRight" >
          <div className="adimnRightWrapper">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </div>
      </div>
  )
}

export default AdminPrivate