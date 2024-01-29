import React from "react";

const SideNav = () => {
  const navigations = [
    { name: "Dashboard", iconClass: "mr-3 bi bi-person-workspace", href: "/" },
    { name: "Orders", iconClass: "mr-3 bi bi-menu-down", href: "/orders" },
    { name: "Settings", iconClass: "mr-3 bi bi-gear-fill", href: "/settings" },
    { name: "Explore", iconClass: "mr-3 bi bi-compass", href: "/explore" },
    {
      name: "Contacts",
      iconClass: "mr-3 bi bi-person-lines-fill",
      href: "/contacts",
    },
    { name: "Billings", iconClass: "mr-3 bi bi-receipt", href: "/billings" },
    {
      name: "My Account",
      iconClass: "mr-3 bi bi-person-circle",
      href: "/my-account",
    },
  ];
  return (
    <div className="w-1/6 h-screen b-r-2">
      <div className="flex-none">
        <div className="w-full pt-10">
          <h1 className="text-2xl font-bold text-green-900 pl-10">
            Protein Hut
          </h1>
        </div>
        <ul className="flex flex-col w-full gap-6 p-10 text-lg">
          {navigations.map((e, index) => (
            <li
              className="flex text-base text-left text-[#63b06b] font-bold"
              key={index}
            >
              <i className={e.iconClass}></i>
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
