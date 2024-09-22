import React, { useEffect, useState } from "react";
import "./Tenantspage.css";
import InviteTenant from "./InviteTenant";
import image from "../../assets/Clip.png";
import { RiAddFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const Tenantspage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenants, setTenants] = useState([]);
  if (isModalOpen === true) {
    console.log("Yesss");
  } else {
    console.log("Nooo");
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = () => alert("Submitted!");

  const token = localStorage.getItem("userToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const getTenants = async () => {
    const url = "https://rentwave.onrender.com/api/v1/tenants";
    try {
      const response = await axios.get(url, config);
      console.log(response);
      setTenants(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTenants();
  }, []);

  // const deleteTenants = async (id) => {
  //   const url = `https://rentwave.onrender.com/api/v1/tenants/${id}`;
  //   try {
  //     const response = await axios.delete(url, config);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="Pages">
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <div className="input">
            <RiSearchLine className="icon" />
            <input type="search" placeholder="Search" className="put" />
          </div>
        </div>
        <div className="btnes">
          {/* <p>View your tenants</p> */}
          <button className="bot" onClick={() => setIsModalOpen(true)}>
            <RiAddFill className="icon" /> Invite Tenants
          </button>
        </div>
        <div className="table1">
          {/* <img src={image} alt="" />
          <p>No renters yet but renter details and status will appear here.</p> */}
          <div className="tenantTable">
            <table>
              <thead>
                <tr
                  style={{
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                >
                  <th className="name-column">Name</th>
                  <th className="name-column1">Lease start</th>
                  <th className="name-column1">Lease End</th>
                  <th className="name-column1">Role</th>
                  {/* <th className="name-column2">Action</th> */}
                </tr>
              </thead>
              <tbody>
  {tenants.map((item, index) => {
    const leaseStartDate = new Date(item.leaseStart).toLocaleDateString(); // Format lease start date
    const leaseEndDate = new Date(item.leaseEnd).toLocaleDateString(); // Format lease end date
    
    return (
      <tr key={index}>
        <td className="name-column">
          <Link
            to="/TenantProfileView1"
            style={{
              cursor: "pointer",
              color: "black",
              fontWeight: "normal",
            }}
          >
            {item.firstName}
          </Link>
        </td>
        <td className="name-column1">{leaseStartDate}</td>
        <td className="name-column1">{leaseEndDate}</td>
        <td className="name-column1">{item.role}</td>
      </tr>
    );
  })}
</tbody>
            </table>
          </div>
        </div>
      </div>
      <InviteTenant
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Tenantspage;
