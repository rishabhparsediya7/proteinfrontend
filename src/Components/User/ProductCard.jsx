import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import download__1 from "../../assets/download__1.png";
import download__2 from "../../assets/download__2.png";
import download__3 from "../../assets/download__3.png";
import download__4 from "../../assets/download__4.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ props }) => {
  const dispatch = useDispatch();
  const [wished, setWished] = useState(false);
  const handleWishList = () => {
    setWished(!wished);
  };
  const [cartProducts, setCartProducts] = useState([]);
  const notify = () => toast.success("Product added to cart!");

  const productImages = [
    download__1,
    download__2,
    download__3,
    download__4,
    download__1,
    download__2,
    download__3,
    download__4,
  ];
  const handleProductCart = (props) => {
    console.log(props);
    dispatch(addToCart(props));
    notify();
  };
  return (
    <div className="w-1/2 sm:w-1/3 flex flex-col p-2">
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
      <div className="bg-slate-100 h-full rounded-lg flex flex-col p-2 justify-center align-middle relative">
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
          <img
            className="h-36 mt-4 mx-auto"
            src={productImages[props.src]}
            alt=""
          />
        </Link>
      </div>
      <div
        id="heading"
        className="p-2 flex flex-col justify-between align-middle"
      >
        <div>
          <Link to={`/product/${props._id}`}>
            <h2 className="text-slate-900 underline font-bold text-lg truncate">
              {props.name}
            </h2>
          </Link>
        </div>
        <div className="my-auto flex justify-between align-middle">
          <h3 className="my-auto">Rs.{props.price_INR}</h3>
          <button
            onClick={() => handleProductCart(props)}
            className="btn w-16 h-8 border-t-neutral-800 bg-stone-800 text-neutral-100 rounded-md"
          >
            <i className="bi bi-plus text-sm font-bold"></i>Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
