import React, { useEffect, useRef, useState } from "react";
import signupbanner from "../../assets/signupbanner.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = ({ length }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [finalOtp, setFinalOtp] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      setDisabledSubmit(!disabledSubmit);
      setFinalOtp(combinedOtp);
    }
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    setLoading(true);
    const verifyOtp = async () => {
      const response = await axios.post(`${BASE_URL}/auth/verify-otp`, {
        email: localStorage.getItem("email"),
        otp: finalOtp,
      });
      if (response.status === 200) {
        localStorage.setItem("verified", true);
        setOtp(new Array(length).fill(""));
        setLoading(false);
        navigate("/update-password");
      }
    };
    verifyOtp();
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
        <h2 className="text-2xl">
          Enter the OTP you have received on your mail{" "}
          <strong> {localStorage.getItem("email")}</strong>
        </h2>
      </div>
      <div className="px-4 flex gap-2 justify-center">
        {otp &&
          otp.map((value, index) => (
            <input
              key={index}
              onClick={() => handleClick(index)}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(inp) => (inputRefs.current[index] = inp)}
              className="rounded-md w-12 px-4 text-xl"
              type="text"
              required
            />
          ))}
      </div>
      <div className="p-4">
        <button
          className="btn text-xl uppercase font-bold w-full py-2 border-slate-500 bg-yellow-200 rounded-md text-black"
          onClick={handleVerifyOTP}
          disabled={disabledSubmit}
        >
          {loading ? (
            <div className="m-auto flex justify-center">
              <div className="w-8 h-8 border-t-4 rounded-full border-gray-500 animate-spin"></div>
            </div>
          ) : (
            <div>Verify OTP</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
