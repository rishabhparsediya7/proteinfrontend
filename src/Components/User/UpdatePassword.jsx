import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreateUser = () => {
    setLoading(true);
    const createUser = async () => {
      const BASE_URL = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(`${BASE_URL}/auth/create`, {
        email: localStorage.getItem("email"),
        password: password,
      });
      // console.log(response);
      if (response.status == 200) {
        setLoading(false);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/");
      } else {
        setError("Couldn't create the account!");
      }
    };
    createUser();
  };
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full md:w-[30rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="px-4 mb-4">
          <h1>For email {localStorage.getItem("email")}</h1>
        </div>
        <div className="px-4 mb-4">
          <input
            className="rounded-md w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="px-4">
          <input
            className="rounded-md w-full"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <div className="p-4">
          <button
            className="btn text-xl uppercase font-bold w-full py-2 border-slate-500 bg-yellow-200 rounded-md text-black"
            onClick={handleCreateUser}
          >
            {loading ? (
              <div className="m-auto flex justify-center">
                <div className="w-8 h-8 border-t-4 rounded-full border-gray-500 animate-spin"></div>
              </div>
            ) : (
              <div>Update Password</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
