import React, { useEffect, useState } from "react";
import "./order.css";
import axios from "axios";
import OrderDetailsCard from "./OrderDetailsCard";
const OrderUtil = ({ user }) => {
  const [orders, setOrders] = useState(user.orders);
  const [errors, setErrors] = useState("");

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
