import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/main1.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.cartList.length);
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
      name: "Popular",
      href: "/popular",
    },
    {
      name: "Best Seller",
      href: "/best-seller",
    },
    {
      name: "Account",
      href: "/account",
    },
  ];

  const handleModal = () => {
    setModalOpen(!ismodalOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    setCartCount(count);
  }, [count]);

  return (
    <div className="w-full">
      <div className="w-full text-base flex justify-between px-2 py-4 shadow-md ">
        <div className="w-full hidden md:block bg-neutral-50 z-10">
          <div
            className="md:hidden bg-neutral-200 w-fit rounded-md p-2 text-slate-900"
            onClick={handleModal}
          >
            <i className="bi bi-text-indent-left"></i>
          </div>
          <ul className="flex gap-2 flex-col md:flex-row">
            {navigations.map((e, index) => (
              <li
                className="hover:bg-black hover:text-neutral-50 hover:rounded-none rounded-lg p-3"
                key={index}
              >
                <Link to={e.href}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:hidden bg-neutral-200 w-fit rounded-md p-2 text-slate-900"
          onClick={handleModal}
        >
          <i className="text-4xl bi bi-text-indent-left"></i>
        </div>
        <div className="flex gap-2">
          {!localStorage.getItem("loggedIn") && (
            <div className="auth h-full">
              <ul className="flex">
                <li className="hover:bg-black md:w-24 hover:text-neutral-50 hover:rounded-none rounded-lg p-3">
                  <Link to="/signup" className="mx-auto">
                    Sign Up
                  </Link>
                </li>
                <li className="hover:bg-black md:w-24 hover:text-neutral-50 hover:rounded-none rounded-lg p-3">
                  <Link to="/signin" className="mx-auto">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {localStorage.getItem("loggedIn") && (
            <div>
              <div className="hover:bg-black md:w-24 hover:text-neutral-50 hover:rounded-none p-3">
                <button onClick={handleLogout} className="m-auto">
                  Logout
                </button>
              </div>
            </div>
          )}
          <div className="bg-slate-200 h-full rounded-md p-2 relative">
            <div className="absolute flex justify-center align-middle -right-1 -top-1 rounded-full h-5 w-5 bg-yellow-300 text-white my-auto">
              {cartCount}
            </div>
            <Link to="/cart">
              <i className="bi bi-cart text-3xl"></i>
            </Link>
          </div>
          <div className="w-[3.5rem] h-[3.5rem] p-1">
            <img className="h-full rounded-md" src={image} alt="user image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
