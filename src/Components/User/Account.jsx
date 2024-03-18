import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import image from "../../assets/main1.jpg";
import LineChartUtil from "./LineChartUtil";
import OrderUtil from "./OrderUtil";
import TotalSpendUtil from "./TotalSpendUtil";
import { Link, useNavigate } from "react-router-dom";
import EditProfile from "./Utils/EditProfile";
import axios from "axios";
const Account = () => {
  const navigate = useNavigate();
  const accounts_nav = ["statistics", "orders", "Edit profile", "total spends"];
  const [user, setUser] = useState({});
  const [error, setErrors] = useState("");
  const rendered_components = [
    <LineChartUtil user={user} />,
    <OrderUtil user={user} />,
    <EditProfile user={user} />,
    <TotalSpendUtil user={user} />,
  ];
  const [index, setIndex] = useState(0);
  const toggleComponents = (index) => {
    setIndex(index);
  };
  const ActiveComponent = () => rendered_components[index];

  const fetchUserDetails = async () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const userId = localStorage.getItem("userid");
    try {
      const response = await axios.get(
        `${BASE_URL}/user/getUserDetail/${userId}`
      );
      if (response.status == 200) {
        setUser(response.data.user);
        console.log(response.data.user.orders);
      }
    } catch (error) {
      setErrors();
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    } else {
      fetchUserDetails();
    }
  }, []);
  return (
    <div>
      <Navbar />
      {!localStorage.getItem("access_token") && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1>You should be logged in to see your Account!</h1>
        </div>
      )}
      <div className="flex flex-col md:flex-row px-2">
        <div className="w-full md:w-1/5 flex flex-col">
          <div className="flex p-2 justify-center">
            <img src={image} className="w-full h-40 rounded-md" alt="" />
          </div>
          <div className="p-2 overflow-x-auto whitespace-nowrap sm:overflow-hidden horizontal-scroll-container sm:flex sm:flex-col">
            <div className="inline-flex sm:flex sm:flex-col space-x-2 sm:space-y-1 sm:space-x-0">
              {accounts_nav.map((e, index) => (
                <div
                  key={index}
                  onClick={() => toggleComponents(index)}
                  className="bg-icon p-2 hover:border-[0.025rem] cursor-pointer hover:border-[#646cff] rounded-md"
                >
                  <p className="uppercase">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <div className="p-2">
            <div className="flex flex-col gap-2">
              <div className="px-4 py-6 bg-[#413e3e52] rounded-md">
                {error && <p>{error}</p>}
                <div>
                  {user.name ? (
                    <h1 className="text-xl sm:text-2xl md:text-4xl">
                      Rishabh Parsediya
                    </h1>
                  ) : (
                    <div className="flex gap-2">
                      <h1 className="text-xl sm:text-2xl md:text-4xl">
                        Full Name
                      </h1>
                      <button
                        className="bg-transparent"
                        onClick={() => toggleComponents(2)}
                      >
                        <i className="bi bi-pencil text-sm"> Edit </i>
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  {user.country ? (
                    <h1 className="text-xl sm:text-2xl md:text-4xl">
                      {user.country}
                    </h1>
                  ) : (
                    <div className="flex gap-2">
                      <h1 className="text-xl sm:text-2xl md:text-4xl">
                        Country
                      </h1>
                      <button
                        className="bg-transparent"
                        onClick={() => toggleComponents(2)}
                      >
                        <i className="bi bi-pencil text-sm"> Edit </i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
