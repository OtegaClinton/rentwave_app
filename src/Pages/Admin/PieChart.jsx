import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ roleData }) => {
  // Prepare data for the pie chart
  const roleCounts = {
    Tenant: 8,
    Landlord: 5,
    Admin: 3
  };

  roleData.forEach((item) => {
    if (roleCounts[item.role] !== undefined) {
      roleCounts[item.role] += 1;
    }
  });

  const data = {
    labels: ["Tenant", "Landlord", "Admin"],
    datasets: [
      {
        label: "# of Users",
        data: [roleCounts.Tenant, roleCounts.Landlord, roleCounts.Admin],
        backgroundColor: ["#4D86DB", "darkBlue", "#36A2EB"],
        // hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"]
      }
    ]
  };

  return (
    <div className="pieChartContainer">
      <h2>Role Distribution</h2>
      <Pie data={data}  />
    </div>
  );
};

export default PieChart;
