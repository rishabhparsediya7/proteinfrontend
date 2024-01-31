import React, { useState } from "react";
import { addToCart, removeFromCart } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartQuantitytoggle = ({ props, q }) => {
  const [quantity, setQuantity] = useState(q);
  const notify = () => toast.success("Product added to cart!");
  const notifyRemove = () => toast.info("Product removed from the cart");
  const dispatch = useDispatch();
  const handleQuantityDecrement = (props) => {
    dispatch(removeFromCart(props));
    if (quantity > 0) {
      setQuantity(quantity - 1);
      notifyRemove();
    }
  };
  const handleQuantityIncrement = (props) => {
    dispatch(addToCart(props));
    notify();
    setQuantity(quantity + 1);
  };
  return (
    <div className="button-group flex flex-row border-black">
      <button
        onClick={() => handleQuantityDecrement(props)}
        className="btn bg-yellow-300 w-6 rounded-l-md"
      >
        <i className="bi bi-dash"></i>
      </button>
      <button
        id={props._id}
        className="btn bg-yellow-300 w-8 border-[1px] border-gray-200"
      >
        {quantity}
      </button>
      <button
        onClick={() => handleQuantityIncrement(props)}
        className="btn bg-yellow-300  w-6 rounded-r-md"
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
};

export default CartQuantitytoggle;
