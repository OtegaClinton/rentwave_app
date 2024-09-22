import React, { useState,  } from "react";
import "./AdminHome.css";
// import homepics from "../../assets/download 12.png"
import Table from "./Table";
import PieChart from "./PieChart";
import { Link } from "react-router-dom";
const AdminHome = () => {

  const [tableData, setTableData] = useState([
    { name: "John Doe", dateRegistered: "2023-09-01", status: "Active", role: "Tenant" },
    { name: "Jane Smith", dateRegistered: "2023-08-15", status: "Inactive", role: "Landlord" },
    { name: "Sam Wilson", dateRegistered: "2023-07-21", status: "Active", role: "Admin" },
    { name: "Alex Johnson", dateRegistered: "2023-06-14", status: "Active", role: "Tenant" },
    { name: "Maria Rodriguez", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" }
  ]);


  return (
    <div className="AdminHome">
      <div className="AdminHomeWrapper">
        <div className="adminHomeUp">
          <h1>OverView</h1>
          <p >Here’s a quick Overview of what’s happening</p>
        </div>
        <div className="AdminDashBoardBox">
          <div className="OneBox1">
            <h1>Admins</h1>
            <div className="adminText">
              <h3>3</h3>
              <p></p>
            </div>
          </div>
          <div className="OneBox1" >
            <h1>Tenants</h1>
            <div className="adminText">
              <h3 >8</h3>
              <p><Link to='/AdminTenant' style={{color:'#4D86DB'}}>See All</Link></p>
            </div>
          </div>
          <div className="OneBox1">
            <h1>Landlords</h1>
            <div className="adminText">
              <h3>5</h3>
              <p><Link to='/AdminLandlord' style={{color:'#4D86DB'}}>See All</Link></p>
            </div>
          </div>
        </div>

        <div className="AdminRecentActivity" >
          {/* <h1>
          Recent Activity
        </h1>
        <div className="TextImage">
        <div className="HomeImage" >
                <img src={homepics} alt=""/>
            </div>
            <h3>No activities yet but recent scheduled and completed payments will appear here</h3>
        </div> */}
          <div className="table-container">
            <h5>Recent Activity</h5>
            <div className="tableHolder">
            <Table />
            <PieChart roleData={tableData} />
            </div>
          </div>



        </div>
      </div>
    </div>

  );
};

export default AdminHome;
