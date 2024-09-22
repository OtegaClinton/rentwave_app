import React, { useEffect, useState } from "react";
import axios from "axios";
import './LandLordHome.css';
import { Link } from "react-router-dom";

const LandLordHome = () => {
  const [propertyCount, setPropertyCount] = useState(0);
  const [tenantCount, setTenantCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  const token = localStorage.getItem("userToken");

  const propertiesUrl = "https://rentwave.onrender.com/api/v1/landlord/properties";
  const tenantsUrl = "https://rentwave.onrender.com/api/v1/tenants"; 
  const paymentsUrl = "https://rentwave.onrender.com/api/v1/payments";
  const maintenanceUrl = "https://rentwave.onrender.com/api/v1/maintenance-requests"; 

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const fetchCounts = async () => {
    try {
      const propertiesResponse = await axios.get(propertiesUrl, config);
      const tenantsResponse = await axios.get(tenantsUrl, config);

      setPropertyCount(propertiesResponse.data.data.length);
      setTenantCount(tenantsResponse.data.data.length);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  const fetchTotalPayments = async () => {
    try {
      const paymentsResponse = await axios.get(paymentsUrl, config);
      const total = paymentsResponse.data.data.reduce((acc, payment) => acc + payment.amount, 0);
      setTotalPayments(total);
      setTotalEarnings(total); 
    } catch (error) {
      console.error("Error fetching total payments:", error);
    }
  };

  const fetchRecentActivities = async () => {
    try {
      const maintenanceResponse = await axios.get(maintenanceUrl, config);
      const paymentsResponse = await axios.get(paymentsUrl, config);

      // Log responses for debugging
      console.log("Maintenance Response:", maintenanceResponse.data);
      console.log("Payments Response:", paymentsResponse.data);

      const activities = [
        ...maintenanceResponse.data.data.map(item => ({
          type: "Maintenance",
          reason: item.requestFor,
          date: new Date(item.createdAt).toLocaleString(),
          status: item.status,
        })),
        ...paymentsResponse.data.data.map(item => ({
          type: "Payment",
          reason: `Payment of ₦${item.amount}`,
          date: new Date(item.paymentDate).toLocaleString(),
          status: item.status,
        })),
      ];

      activities.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log("Recent Activities:", activities); // Log activities for debugging
      setRecentActivities(activities);
    } catch (error) {
      console.error("Error fetching recent activities:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
    fetchTotalPayments();
    fetchRecentActivities();
  }, []);

  return (
    <div className="LandLordHome">
      <div>
        <h1>Overview</h1>
        <p>Here’s a quick Overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox2">
          <h1>Property Listed</h1>
          <div className="TenantText">
            <h3>{propertyCount}</h3>
            <Link to="/Propertics">See All</Link>
          </div>
        </div>
        <div className="OneBox2">
          <h1>Tenants</h1>
          <div className="TenantText">
            <h3>{tenantCount}</h3>
            <Link to="/View-Tenant">See All</Link>
          </div>
        </div>
        <div className="OneBox2">
          <h1>Total Payments</h1>
          <div className="TenantText">
            <h3 className="h3">₦{totalPayments.toFixed(2)}</h3>
            <Link to="/Transactions">See All</Link>
          </div>
        </div>
      </div>

      <div className="TenantRecentActivity">
        <h1>Recent Activity</h1>
        <div className="TextImage">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.type}</td>
                  <td>{activity.reason}</td>
                  <td>{activity.date}</td>
                  <td>{activity.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandLordHome;
