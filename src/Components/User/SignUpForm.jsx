import React, { useState } from "react";
import signupbanner from "../../assets/signupbanner.jpg";
import axios from "axios";

const SignUpForm = ({ handleToggle }) => {
  const [email, setEmail] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const getVerifyMail = async () => {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/auth/mail-otp`, {
        email: email,
      });
      if (response.status == 200) {
        localStorage.setItem("email", response.data.response.email);
        setEmail("");
        setLoading(false);
        handleToggle();
      }
    };
    if (!email) return;
    getVerifyMail();
  };
  return (
    <div className="flex flex-col">
      <div className="p-4 m-auto">
        <h1 className="uppercase text-4xl">We welcome you</h1>
      </div>
      <div className="m-auto">
        <img src={signupbanner} className="h-40 w-40 rounded-full" alt="" />
      </div>
      <div className="p-4 m-auto">
        <h2 className="text-2xl">New User ?. Enter your mail.</h2>
      </div>
      <div className="px-4">
        <input
          className="rounded-md w-full bg-transparent text-white"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="p-4">
        <button
          className="text-xl uppercase font-bold w-full py-2 rounded-md"
          onClick={handleSignUp}
        >
          {loading ? (
            <div className="m-auto flex justify-center">
              <div className="w-8 h-8 border-t-4 rounded-full border-gray-500 animate-spin"></div>
            </div>
          ) : (
            <div>submit</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
