import React, { useEffect, useState } from "react";
import "./Landlord.css";
import "./Maintenance.css";
import image from "../../assets/download 16.png";
import axios from "axios";

const Maintenance = () => {
  const [maintenance, setMaintenance] = useState([]);

  const token = localStorage.getItem("userToken");
  const url = "https://rentwave.onrender.com/api/v1/maintenance-requests";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const getMaintenance = async () => {
    try {
      const response = await axios.get(url, config);
      console.log(response);
      setMaintenance(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaintenance();
  }, []);

  return (
    <div className="Pages">
      <div className="Maintainontainer">
        <div className="headup">
          <h4>Maintenance Request</h4>
          <p>Keep track of maintenance requests on RentWave</p>
        </div>
        <div className="thebox">
          <div className="inside">
            {/* <h4>Oh snap! there’s nothing here</h4>
            <img src={image} alt="" />
            <p>There are no maintenance request yet on this account</p> */}

            <table>
              <thead>
                <tr className="TenantMainDownHeader">
                  <th
                    className="TenMaincolumn1"
                    style={{ borderTopLeftRadius: "5px", width: "30%" }}
                  >
                    REASON
                  </th>
                  <th className="TenMaincolumn">DATE/TIME</th>
                  <th
                    className="TenMaincolumn"
                    style={{ borderTopRightRadius: "5px" }}
                  >
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {maintenance?.map((item) => (
                  <tr key={item._id} >
                    <td className="TenMaincolumn1" style={{ width: "30%" }}>
                      {item.requestFor} 
                    </td>
                    <td className="TenMaincolumn" style={{ width: "40%" }}>
                      {new Date(item.createdAt).toLocaleString()} {/* Use createdAt */}
                    </td>
                    <td className="TenMaincolumn">Sent</td> {/* Default status */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
