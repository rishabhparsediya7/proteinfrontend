import React from "react";
import LineChart from "./Utils/LineChart";

const LineChartUtil = () => {
  return (
    <div className="px-4 py-6 flex flex-col md:flex-row space-x-1 bg-[#413e3e52] rounded-md">
      <div className=" bg-transparent/20 rounded-md p-2 flex-1 w-full">
        <LineChart />
      </div>
      <div className="rounded-md p-2 flex-1 w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default LineChartUtil;
