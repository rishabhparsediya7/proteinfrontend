import React, { useContext } from "react";
import Navbar from "./Navbar";
import SignUpAuth from "./SignUpAuth";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const { verified } = useContext(UserContext);
  console.log("verified: "+verified);
  return (
    <div>
      <Navbar />
      <SignUpAuth />
    </div>
  );
};

export default SignUp;
