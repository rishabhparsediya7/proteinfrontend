import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/main1.jpg";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/slice";
import avatar from "../../assets/avatar.jfif";
const Navbar = () => {
  const navigate = useNavigate();
  const count = useSelector(selectCartCount);
  const [cartCount, setCartCount] = useState(count);
  const [ismodalOpen, setModalOpen] = useState(false);
  const navigations = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "My Orders",
      href: "/my-order",
    },
    {
      name: "Account",
      href: "/account",
    },
  ];

  const handleModal = () => {
    console.log("hi");
    setModalOpen(!ismodalOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    setCartCount(count);
  }, [count]);

  return (
    <div className="w-full">
      <div className="w-full text-base flex justify-between px-2 py-4 shadow-md ">
        <div className="w-full hidden md:block z-10">
          <div
            className="md:hidden w-fit rounded-md p-2 text-white"
            onClick={handleModal}
          >
            <i className="bi bi-text-indent-left "></i>
          </div>
          <ul className="flex gap-2 flex-col md:flex-row">
            {navigations.map((e, index) => (
              <li
                className="hover:bg-icon hover:rounded-md hover:border-[0.015rem] hover:border-[#a4a4e9] rounded-md p-3"
                key={index}
              >
                <Link to={e.href}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:hidden w-fit rounded-md p-2 text-white"
          onClick={handleModal}
        >
          <i className="text-4xl bi bi-text-indent-left"></i>
        </div>
        <div className="flex gap-2">
          {!localStorage.getItem("loggedIn") && (
            <div className="auth h-full">
              <ul className="flex">
                <li className="hover:bg-icon hover:border-[#646cff] md:w-24 hover:text-neutral-50 hover:rounded-md rounded-lg p-3">
                  <Link to="/signup" className="mx-auto">
                    Sign Up
                  </Link>
                </li>
                <li className="hover:bg-icon hover:border-[#646cff] md:w-24 hover:text-neutral-50 hover:rounded-md rounded-lg p-3">
                  <Link to="/signin" className="mx-auto">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {localStorage.getItem("loggedIn") && (
            <div className="m-auto">
              <button className="p-2" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          <div className="bg-icon h-full rounded-md p-2 relative">
            <div className="absolute flex justify-center align-middle -right-1 -top-1 rounded-full h-5 w-5 bg-white text-[#1a1a1a] text-sm my-auto">
              {cartCount}
            </div>
            <Link to="/cart">
              <i className="bi bi-cart text-3xl"></i>
            </Link>
          </div>
          <div className="w-[3.5rem] h-[3.5rem] p-1">
            <img className="h-full rounded-md" src={avatar} alt="user image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
