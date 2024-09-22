import React from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import PaymentPopup from "./PaymentPopup";
import "./TenantPayment.css";
import { formatDateTime } from "../../Components/utils/utils";

const TenantPayment = ({ showPopup, setShowPopup, closePopup }) => {
  const handleRequestClick = () => {
    setShowPopup(true);
  };

  // const data = [
  //   {
  //     Date: "2023-09-01",
  //     Amount: "₦1000000",
  //     PaymentMethod: "Verve card",
  //     status: "Pending",
  //     time: "2:45pm",
  //   },
  //   {
  //     Date: "2023-09-01",
  //     Amount: "₦1000000",
  //     PaymentMethod: "Verve card",
  //     status: "Pending",
  //     time: "2:45pm",
  //   },
  //   {
  //     Date: "2023-09-01",
  //     Amount: "₦1000000",
  //     PaymentMethod: "Verve card",
  //     status: "Pending",
  //     time: "2:45pm",
  //   },
  //   {
  //     Date: "2023-09-01",
  //     Amount: "₦1000000",
  //     PaymentMethod: "Verve card",
  //     status: "Pending",
  //     time: "2:45pm",
  //   },
  //   {
  //     Date: "2023-09-01",
  //     Amount: "₦1000000",
  //     PaymentMethod: "Verve card",
  //     status: "Pending",
  //     time: "2:45pm",
  //   },
  // ];

  const paymentHistory =
    JSON.parse(localStorage.getItem("paymentHistory")) || [];

  return (
    <>
      <div
        className={`TenantPayContainer ${showPopup ? "blur-background" : ""}`}
      >
        <div className="TenantPayContainerHeader">
          <div className="TenantPayContainerright">
            <h3>Payment</h3>
            <p>Manage payment on RentWave</p>
          </div>
          <div className="TenantPayContainerLeft">
            <IoNotificationsCircleSharp
              className="menuIcons"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="paymentdownContainer">
          <div className="iniPayment">
            <button onClick={handleRequestClick}>Initiate Payment</button>
          </div>

          <div className="TenantPayDown">
            <div className="TenantPayDownHeader">
              <ul>
                <li>Payment History</li>
              </ul>
            </div>

            <div className="TenantPayHis">
              <table className="paymentTable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((item, index) => {
                    const { formattedDate, formattedTime } = formatDateTime(
                      new Date()
                    );

                    return (
                      <tr key={index}>
                        <td>{formattedDate}</td>
                        <td>{item.amount}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{formattedTime}</td>
                        <td>{"Sent"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Popup */}
      {showPopup ? <PaymentPopup closePopup={closePopup} /> : null}
    </>
  );
};

export default TenantPayment;
