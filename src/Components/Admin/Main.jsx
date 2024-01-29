import React from "react";
import image from "../../assets/main1.jpg";
import CardContainer from "./CardContainer";
import SideLists from "./SideLists";
const Main = () => {
  return (
    <div className="flex">
      <div className="w-2/3 px-16">
        <div className="w-full relative">
          <img className="w-full h-52 rounded-xl" src={image} alt="" />
          <div className="absolute top-28 left-4 text-left justify-center align-middle">
            <h1 className="text-neutral-100 text-2xl font-bold mb-2">
              Get Power. Get Muscles.
            </h1>
            <button className="btn bg-green-400 px-8 py-2 rounded-xl text-neutral-50">
              Know more
            </button>
          </div>
        </div>
        <CardContainer />
      </div>
      <div className="w-1/3">
        <SideLists />
      </div>
    </div>
  );
};

export default Main;
