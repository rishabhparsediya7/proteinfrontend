import React from "react";
import SigninForm from "./SigninForm";
import Navbar from "./Navbar";

const Signin = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full md:w-[30rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
