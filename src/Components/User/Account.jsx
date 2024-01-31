import React from "react";
import Navbar from "./Navbar";

const Account = () => {
  const getUserStatus = () => {
    if (!localStorage.getItem("access_token")) {
      return <h1>You should be logged in to see your Account!</h1>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {getUserStatus()}
      </div>
    </div>
  );
};

export default Account;
