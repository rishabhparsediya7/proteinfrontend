import React, { useEffect } from "react";
import AddProduct from "./AddProduct";

const Admin = () => {
  return (
    <div className="flex flex-col mt-10 px-8 m-auto">
      <div className="flex justify-center align-middle text-4xl font-bold text-slate-900 mb-5">
        Add Products
      </div>
      <AddProduct />
    </div>
  );
};

export default Admin;
