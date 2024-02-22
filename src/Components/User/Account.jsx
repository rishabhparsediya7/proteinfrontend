import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import image from "../../assets/main1.jpg";
import LineChartUtil from "./LineChartUtil";
import OrderUtil from "./OrderUtil";
import TotalSpendUtil from "./TotalSpendUtil";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const accounts_nav = ["stats", "orders", "Edit profile", "total spends"];
  const rendered_components = [
    <LineChartUtil />,
    <OrderUtil />,
    <TotalSpendUtil />,
  ];
  const [index, setIndex] = useState(0);
  const toggleComponents = (index) => {
    setIndex(index);
  };
  const ActiveComponent = () => rendered_components[index];
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
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
          <div className="p-2">
            <ul className="space-y-2">
              {accounts_nav.map((e, index) => (
                <li
                  key={index}
                  onClick={() => toggleComponents(index)}
                  className="uppercase bg-icon p-2 text-center hover:border-[0.025rem] cursor-pointer hover:border-[#646cff] rounded-md"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <div className="p-2">
            <div className="flex md:flex-col gap-2">
              <div className="px-4 py-6 bg-[#413e3e52] rounded-md">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-4xl">
                    Rishabh Parsediya
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl sm:text-xl md:text-xl">
                    Indira Nagar, Vijay Street, Lashkar, Gwalior
                  </h1>
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
