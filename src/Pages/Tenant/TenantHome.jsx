import React, { useEffect, useState } from "react";
import "./TenantHome.css";
import { formatDateTime } from "../../Components/utils/utils";
import axios from "axios";

const TenantHome = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [view, setView] = useState("all"); // Track what to show ("all", "payments", "maintenance")

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    const fetchPayments = async () => {
      try {
        const response = await axios.get("https://rentwave.onrender.com/api/v1/payments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.data;
      } catch (error) {
        console.error("Error fetching payments:", error);
        return [];
      }
    };

    const fetchMaintenanceRequests = async () => {
      try {
        const response = await axios.get(
          "https://rentwave.onrender.com/api/v1/all-maintenance-requests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching maintenance requests:", error);
        return [];
      }
    };

    const fetchData = async () => {
      const [payments, maintenanceRequests] = await Promise.all([
        fetchPayments(),
        fetchMaintenanceRequests(),
      ]);

      const combined = [
        ...payments.map((item) => ({
          type: "Payment",
          amount: `₦${item.amount}`,
          date: new Date(item.paymentDate),
          method: item.paymentMethod,
        })),
        ...maintenanceRequests.map((item) => ({
          type: item.requestFor,
          amount: "N/A",
          date: new Date(item.createdAt),
          status: item.status || "Pending",
        })),
      ];

      setCombinedData(combined);

      // Optionally save to localStorage
      localStorage.setItem("paymentHistory", JSON.stringify(payments));
      localStorage.setItem(
        "maintenanceRequests",
        JSON.stringify(maintenanceRequests)
      );
    };

    fetchData();
  }, []);

  // Handlers for "See All"
  const handleSeeAllPayments = () => {
    setView("payments"); // Set the view to payments
  };

  const handleSeeAllMaintenance = () => {
    setView("maintenance"); // Set the view to maintenance requests
  };

  const handleSeeAllActivities = () => {
    setView("all"); // Set the view to show all activities
  };

  // Filter data based on the current view
  const filteredData =
    view === "payments"
      ? combinedData.filter((item) => item.type === "Payment")
      : view === "maintenance"
      ? combinedData.filter((item) => item.type !== "Payment")
      : combinedData; // Default view shows all

  return (
    <div className="TenantHome">
      <div>
        <h1>Overview</h1>
        <p>Here’s a quick overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
          <h1>Recent Activity</h1>
          <div className="TenantText" onClick={handleSeeAllActivities} style={{ cursor: "pointer" }}>
            <h3>{combinedData.length}</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
          <h1>Payment</h1>
          <div className="TenantText" onClick={handleSeeAllPayments} style={{ cursor: "pointer" }}>
            <h3>{combinedData.filter(item => item.type === "Payment").length}</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox" style={{ borderTop: "10px solid #4D86DB" }}>
          <h1>Maintenance Request</h1>
          <div className="TenantText" onClick={handleSeeAllMaintenance} style={{ cursor: "pointer" }}>
            <h3>{combinedData.filter(item => item.type !== "Payment").length}</h3>
            <p>See All</p>
          </div>
        </div>
      </div>

      <div className="TenantRecentActivity">
        <h1>Recent Activity</h1>
        <div className="RecentActPage">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status/Method</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5">No recent activities</td>
                </tr>
              ) : (
                filteredData.map((item, index) => {
                  const { formattedDate, formattedTime } = formatDateTime(item.date);
                  return (
                    <tr key={index}>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>{formattedDate}</td>
                      <td>{formattedTime}</td>
                      <td>{item.method || item.status}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantHome;
