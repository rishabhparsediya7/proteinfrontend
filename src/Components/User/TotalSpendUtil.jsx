import React from "react";

const TotalSpendUtil = ({ user }) => {
  return (
    <div>
      {user.totalSpends ? (
        <h1>Total Spending on the Orders: {user.totalSpends}</h1>
      ) : (
        <h1>No Spending yet</h1>
      )}
    </div>
  );
};

export default TotalSpendUtil;
