import React from "react";

const TopNav = () => {
  return (
    <div className="flex max-w-full w-full px-16 py-8">
      <div className="flex flex-col text-slate-950">
        <h1 className="text-2xl font-extrabold">Welcome to Protein Hut</h1>
        <h3 className="text-sm">Hello User, Welcome Back!</h3>
      </div>
      <div className="flex-grow ml-6 relative">
        <input
          className="w-full rounded-full"
          type="search"
          placeholder="Type what you want to explore..."
        />
        <i class="absolute right-4 top-2 bi bi-search cursor-pointer"></i>
      </div>
      <div className="flex flex-grow justify-center gap-4 text-slate-700">
        <div className="w-12 h-12 rounded-lg relative shadow-lg ">
          <i class="bi bi-chat-left-text text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
        </div>
        <div className="w-12 h-12 rounded-lg shadow-lg relative">
          <i class="bi bi-bell-fill absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
        </div>
        <div className="w-12 h-12 rounded-lg shadow-lg relative">
          <i class="bi bi-person-circle text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
