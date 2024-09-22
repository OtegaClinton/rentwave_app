import React from 'react'
import "./AdminLandlord.css"
// import TenantPayment from './TenantPayment'
// import TenantPayHero from './TenantPayHero'
import { Outlet } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const AdminLandlord = () => {

  const data = [
    { name: "John ade", dateRegistered: "2023-09-01", status: "Active", role: "Landlord" },
    { name: "Jane falade", dateRegistered: "2023-08-15", status: "Inactive", role: "Landlord" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Landlord" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Landlord" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Landlord" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Landlord" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Landlord" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Landlord" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Landlord" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" },
  ]
  return (
<div className="AdminLandlordContainer">
    <div className='AdminLandlordUp'>
      <h4>Landlord Track</h4>
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
            <tr key={index} >
              <td className='name-column'><Link to='/AdminLandlordProfile' style={{cursor:'pointer',color:"black",fontWeight:'normal'}}>{item.name}</Link></td>
              <td className='name-column1'>{item.dateRegistered}</td>
              <td className='name-column1'>{item.status}</td>
              <td className='name-column1'>{item.role}</td> 
               <td><div className='AdminbtnContainer'><button className='AdminlandlordDel'>Delete</button> <button className='AdminEdit'>Edit</button></div></td> 
            </tr>
          ))}
        </tbody>
      </table>
       
      </div>
      {/* <Outlet/> */}
        </div>


   
  )
}

export default AdminLandlord