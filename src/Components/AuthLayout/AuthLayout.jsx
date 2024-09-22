import {Outlet}from "react-router-dom";
import "./AuthLayout.css"

const AuthLayout=()=>{
    return(
        <div className="Auth_layout">
            <Outlet/>
        </div>
        
    )
}

export default AuthLayout