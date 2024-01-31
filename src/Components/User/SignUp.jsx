import React, { useContext } from "react";
import Navbar from "./Navbar";
import SignUpAuth from "./SignUpAuth";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <SignUpAuth />
    </div>
  );
};

export default SignUp;
