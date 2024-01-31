import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./order.css";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const getOrders = async () => {
      const response = await axios.post(`${baseUrl}/user/getUserOrders`, {
        email: localStorage.getItem("email"),
      });
      if (response.status === 200) {
        setOrders(response.data.orders);
      } else if (response.status === 404) {
        setErrors("Orders not found");
      }
    };

    if (localStorage.getItem("access_token")) {
      getOrders();
    }
  }, []);
  const getUserStatus = () => {
    if (!localStorage.getItem("access_token")) {
      return <h1>You should be logged in to see your orders!</h1>;
    }
  };
  return (
    <div>
      <Navbar />
      {errors && <p>{errors}</p>}
      <div className="w-full flex flex-col">
        <div className="w-full p-20 absolute flex flex-wrap gap-2">
          {orders &&
            orders.map((e, index) => {
              const date = new Date(e.timestamp);
              const created = date.toLocaleDateString();
              return (
                <div key={index} className="cardorder">
                  <button type="button" className="dismissorder">
                    ×
                  </button>
                  <div className="headerorder">
                    <div className="imageorder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            stroke="#000000"
                            d="M20 7L9.00004 18L3.99994 13"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="contentorder">
                      <span className="titleorder">
                        Order created on {created}
                      </span>
                      <p className="messageorder">
                        Thank you for your purchase. you package will be
                        delivered within 2 days of your purchase
                      </p>
                      <div className="border-2 m-1 border-dashed">
                        {e.itemPurchased &&
                          e.itemPurchased.map((item, index) => (
                            <div className="w-full p-2" key={index}>
                              <div className="flex justify-between">
                                <div className="messageorder">
                                  <strong>{item.item}</strong>
                                </div>
                                <div className="messageorder">
                                  <strong>{item.quantity}</strong>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                      <p className="messageorder">
                        <strong>Total Amount : </strong> {e.amount}
                      </p>
                      <p className="messageorder">
                        <strong>Order Id:</strong> {e.orderId}
                      </p>
                      <p className="messageorder">
                        <strong>Payment Id:</strong> {e.paymentId}
                      </p>
                    </div>
                    <div className="actionsorder">
                      <button type="button" className="historyorder">
                        History
                      </button>
                      <button type="button" className="trackorder">
                        Track my package
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {getUserStatus()}
      </div>
    </div>
  );
};

export default Order;
