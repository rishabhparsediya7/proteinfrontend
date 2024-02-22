import React, { useEffect, useState } from "react";
import "./order.css";
import axios from "axios";
import OrderDetailsCard from "./OrderDetailsCard";
const OrderUtil = () => {
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
  return (
    <div className="bg-icon p-2 rounded-md">
      <div className="w-full flex p-2">
        <div className="w-full flex flex-wrap gap-2">
          {orders &&
            orders.map((e, index) => {
              return <OrderDetailsCard key={index} orderData={e} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default OrderUtil;
