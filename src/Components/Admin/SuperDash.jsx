import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Main from "./Main";
const SuperDash = () => {
  return (
    <div className="flex w-full align-middle">
      <SideNav />
      <div className="flex flex-col justify-between flex-1 h-20">
        <TopNav />
        <Main/>
      </div>
    </div>
  );
};

export default SuperDash;
