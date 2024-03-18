import React, { useContext, useState } from "react";
import signinbanner from "../../assets/signupbanner.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const handleAuth = async () => {
    const login = async () => {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        email: email,
        password: password,
      });
      if (response.status == 200) {
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userid", response.data.userId);
        localStorage.setItem("access_token", response.data.access_token);
        setLoading(false);
        navigate("/");
      } else {
        setError(response.data.error);
      }
    };
    login();
  };
  const handleSignIn = async () => {
    const getVerifyMail = async () => {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/auth/userExists`, {
        email: email,
      });
      if (response.status == 200 && response.data.exists) {
        localStorage.setItem("email", response.data.email);
        setLoading(false);
        setEmailExists(true);
      } else {
        setError("The email you have entered does not exists! Please signup");
      }
    };
    if (email) getVerifyMail();
  };
  return (
    <div className="flex flex-col">
      <div className="p-4 m-auto">
        <h1 className="uppercase text-4xl">We welcome you</h1>
      </div>
      <div className="m-auto">
        <img src={signinbanner} className="h-40 w-40 rounded-full" alt="" />
      </div>
      <div className="p-4 m-auto">
        <h2 className="text-2xl">Enter your mail.</h2>
      </div>
      <div className="px-4">
        {error && <p>{error}</p>}
        <input
          className="rounded-md w-full bg-transparent focus:outline-none"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {emailExists && (
        <div className="p-4">
          <input
            className="rounded-md w-full bg-transparent border border-b-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      )}
      <div className="px-4">
        <Link
          className="rounded-md flex justify-end w-full underline text-white"
          to="/signup"
        >
          New User ? Sign Up
        </Link>
      </div>
      <div className="p-4">
        <button
          className="text-xl uppercase font-bold w-full py-2 rounded-md"
          onClick={email && password ? handleAuth : handleSignIn}
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

export default SigninForm;
