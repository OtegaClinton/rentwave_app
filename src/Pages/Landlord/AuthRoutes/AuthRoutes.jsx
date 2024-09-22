import React from 'react'
import '../Landlord.css'
import MenuBar from '../MenuBar'
import { Outlet } from 'react-router-dom'

const AuthRoutes=()=>{
    // const checkIfLoggedIn = useSelector((state)=> state.isLoggedIn);
    
    return(
        <div className="LandLordPage">
          <MenuBar />
          <div className="Pages">
            <Outlet />
          </div>
        </div>
        // <>
        // {checkIfLoggedIn? <Outlet/>:<Navigate to="/Login" replace={true}/>}
        // </>
    )
}

export default AuthRoutes