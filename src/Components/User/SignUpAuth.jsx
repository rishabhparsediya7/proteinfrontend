import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import VerifyOtp from "./VerifyOtp";
const SignUpAuth = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full">
      <div className="w-full md:w-[30rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {toggle ? (
          <VerifyOtp length={4} />
        ) : (
          <SignUpForm handleToggle={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default SignUpAuth;
