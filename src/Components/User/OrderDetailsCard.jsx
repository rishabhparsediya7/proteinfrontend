import React from "react";

const OrderDetailsCard = ({ orderData }) => {
  const date = new Date(orderData.timestamp);
  const created = date.toLocaleDateString();
  return (
    <div className="max-w-7xl p-5 space-y-2 text-white bg-[#3a3a3b9e] border shadow hover:shadow-md rounded-lg">
      <div className="text-center font-bold bg-icon p-2 rounded-md">
        Order: #{orderData.orderId}
      </div>
      <div className="flex space-x-2">
        <p className="font-medium">Customer: </p>
        <span className="capitalize">{orderData.ordered_by}</span>
      </div>
      <div className="flex space-x-2">
        <p className="font-medium">Order Date:</p>
        <span className="">{created}</span>
      </div>
      <div className="">
        <h2 className="font-medium mt-2 my-2">Items</h2>
        {orderData.itemPurchased.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="">
              {item.quantity} x {item.item}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200">
        <h2 className="font-medium mb-1 mt-2">Total</h2>
        <span className="font-bold">
          <i className="bi bi-currency-rupee"></i> {orderData.amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
