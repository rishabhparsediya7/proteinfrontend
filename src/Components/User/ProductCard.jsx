import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartQuantitytoggle from "./CartQuantitytoggle";

const ProductCard = ({ props }) => {
  const [wished, setWished] = useState(false);
  const handleWishList = () => {
    setWished(!wished);
  };
  const blob = new Blob([Int8Array.from(props.image.data.data)], {
    type: props.image.contentType,
  });
  const imageSrc = window.URL.createObjectURL(blob);
  return (
    <div className="w-1/2 md:w-1/4 sm:w-1/3 flex flex-col p-2">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className="border-[0.025rem] hover:border-[#646cff] border-[#818181] h-full rounded-lg flex flex-col p-2 justify-center align-middle relative">
        <div className="absolute top-4 right-4">
          {wished ? (
            <FaHeart
              className="text-lg"
              onClick={handleWishList}
              style={{ color: "red" }}
            />
          ) : (
            <FaRegHeart className="text-lg" onClick={handleWishList} />
          )}
        </div>
        <Link to={`/product/${props._id}`}>
          <img className="h-44 mt-4 mx-auto" src={imageSrc} alt="" />
        </Link>
      </div>
      <div
        id="heading"
        className="p-2 flex flex-col justify-between align-middle"
      >
        <div>
          <Link to={`/product/${props._id}`}>
            <h2 className="font-bold text-lg truncate">{props.name}</h2>
          </Link>
        </div>
        <div>
          <p className="text-sm">{props.company}</p>
        </div>
        <div className="my-auto flex justify-between align-middle">
          <h3 className="my-auto">Rs.{props.price_INR}</h3>
          <CartQuantitytoggle props={props} q={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
