import React from 'react'
import TenPay from "../../assets/payment 1.png"
import "./AdminTenant.css"
import { CiSearch } from "react-icons/ci";
// import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TenantPayHero = () => {
  const data = [
    { name: "John ade", dateRegistered: "2023-09-01", status: "Active", role: "Tenant" },
    { name: "Jane falade", dateRegistered: "2023-08-15", status: "Inactive", role: "Tenant" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Tenant" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Tenant" },
  ]
  return (
  
    <div className="AdminLandlordContainer">
   <div className='AdminLandlordUp'>
      <h4>Tenant Track</h4>
      <div className='search-input'>
      <CiSearch style={{width:"30px",height:'30px',color:"white",cursor:'pointer'}}/>
        <input type="text" />
      </div>
      </div>
    <div className="AdminLandlord">
    <table>
      <thead>
        <tr>
          <th className='name-column'>Name</th>
          <th className='name-column1'>Date Registered</th>
          <th className='name-column1'>Status</th>
          <th className='name-column1'>Role</th> 
          <th className='name-column2'>Action</th>
         
    
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className='name-column'><Link to='/AdminTenantProfile' style={{cursor:'pointer',color:"black",fontWeight:'normal'}}>{item.name}</Link></td>
            <td className='name-column1'>{item.dateRegistered}</td>
            <td className='name-column1'>{item.status}</td>
            <td className='name-column1'>{item.role}</td> 
            <td><button className='AdminlandlordDel'>Delete</button></td> 
          </tr>
        ))}
      </tbody>
    </table>
     
    </div>
    {/* <Outlet/> */}
      </div>


  )
}

export default TenantPayHero