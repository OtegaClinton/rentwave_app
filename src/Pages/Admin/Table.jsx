import React from 'react';
import './Table.css'; 

const Table = () => {
 
  const data = [
    { name: "John ade", dateRegistered: "2023-09-01", status: "Active", role: "Tenant" },
    { name: "Jane falade", dateRegistered: "2023-08-15", status: "Inactive", role: "Landlord" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Admin" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Tenant" },
    // { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" }
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Registered</th>
            <th>Status</th>
            <th>Role</th> 
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.dateRegistered}</td>
              <td>{item.status}</td>
              <td>{item.role}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
