import React, { useEffect, useState } from 'react';
import './Transaction.css';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Transaction = () => {
  const [payments, setPayments] = useState([]);
  const token = localStorage.getItem("userToken");
  const url = "https://rentwave.onrender.com/api/v1/payments"; // Update with your actual API URL

  const fetchPayments = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPayments(response.data.data); // Store the payment data
    } catch (error) {
      console.error("Error fetching payments:", error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <div className='input'>
            <RiSearchLine className='icon' />
            <input type="search" placeholder='Search' className='put' />
          </div>
          
        </div>
        <div className="TotalLndAmt">
        <p>Total Amount:</p>
        </div>
        
        <div className="table">
          <div className="tableData">
            <table>
              <thead>
                <tr>
                  <th className='name-column'>Name</th>
                  <th className='name-column1'>Amount</th>
                  <th className='name-column1'>Date</th>
                  <th className='name-column1'>Status</th>
                  <th className='name-column2'>Time</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item) => (
                  <tr key={item._id}>
                    <td className='name-column'>
                      <Link to='/TransactionView1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>
                        {item.firstName} {item.lastName} {/* Display full name */}
                      </Link>
                    </td>
                    <td className='name-column1'>₦{item.amount}</td> {/* Display amount */}
                    <td className='name-column1'>{new Date(item.paymentDate).toLocaleDateString()}</td> {/* Display date */}
                    <td className='name-column1'>{item.status}</td>
                    <td className='name-column1'>{new Date(item.paymentDate).toLocaleTimeString()}</td> {/* Display time */}
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

export default Transaction;
