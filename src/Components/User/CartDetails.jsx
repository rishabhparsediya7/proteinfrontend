import React, { useState } from "react";
import { useSelector } from "react-redux";
import image from "../../assets/download__1.png";
import emptyCart from "../../assets/eCart.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartQuantitytoggle from "./CartQuantitytoggle";
import LocationComponent from "./LocationComponent";
import Button from "./Utils/Button";
import "./cartDetail.css";
const CartDetails = () => {
  const [ordered_by, setOrdered_by] = useState("");
  const navigate = useNavigate();
  const cartListData = useSelector((state) => state.cart.cartList);
  const amount = cartListData.reduce(getTotal, 0);
  function getTotal(total, num) {
    return total + num.price_INR * num.quantity;
  }
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const getItemsPurchased = () => {
    return cartListData.map((e, index) => {
      return {
        item: e.name,
        quantity: e.quantity,
      };
    });
  };
  const displayRazorpay = async () => {
    console.log("clicked");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const a = cartListData.reduce(getTotal, 0);
    const body = {
      amount: a,
    };
    const result = await axios.post(`${BASE_URL}/payment/order`, body);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: amount.toString(),
      currency: currency,
      name: ordered_by,
      description: JSON.stringify(getItemsPurchased()),
      image: "",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          email: localStorage.getItem("email"),
          ordered_by: ordered_by,
          amount: amount,
          itemsPurchased: getItemsPurchased(),
        };

        const res = await axios.post(`${BASE_URL}/payment/success`, data);
        const orderId = res.data.orderId;
        const paymentId = res.data.paymentId;
        if (res.status === 200) {
          navigate(`/success?orderId=${orderId}&paymentId=${paymentId}`);
        }
        alert(res.data.msg);
      },
      prefill: {
        name: { ordered_by },
        email: localStorage.getItem("email"),
        contact: "9999999999",
      },
      notes: {
        address: "Example Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex-grow">
          {cartListData.length > 0 && (
            <div className="w-full p-4 flex flex-col gap-2">
              {cartListData.map((e, index) => (
                <div key={index} className="w-full p-2 flex bg-icon rounded-md">
                  <div className="h-24 w-28">
                    <img
                      className="h-full w-full rounded-md"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <h1 className="font-bold flex-grow">{e.name}</h1>
                    <p className="font-bold">Rs. {e.price_INR}</p>
                    <CartQuantitytoggle props={e} q={e.quantity} />
                  </div>
                  <div className="p-2 font-bold italic">
                    Quantity:{e.quantity}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartListData.length > 0 && (
          <div className="w-96 p-4">
            <div className="w-full">
              <h1 className="text-xl font-bold mb-6">Product Memo</h1>
              <div className="flex flex-col">
                <ul className="">
                  {cartListData.map((e, index) => (
                    <li className="list-inside list-decimal" key={index}>
                      {e.name} <code className="italic">x {e.quantity}</code>
                    </li>
                  ))}
                </ul>
                <h1 className="text-lg">
                  Total Amount : <strong> {amount}</strong>
                </h1>
                <LocationComponent />
                <input
                  type="text"
                  className="rounded-md border-[0.025rem] p-2 text-white bg-transparent border-gray-300 mb-2"
                  value={ordered_by}
                  placeholder="Ordered By"
                  onChange={(e) => setOrdered_by(e.target.value)}
                />
                <Button
                  handler={displayRazorpay}
                  disabled={localStorage.getItem("access_token") ? false : true}
                  title={"checkout"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {cartListData.length == 0 && (
        <div>
          <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-20 w-full rounded-md flex justify-center gap-2 text-center flex-col">
              <div className="container-animation">
                <img
                  className="cartanimation w-40 h-40"
                  src={emptyCart}
                  alt=""
                />
              </div>
              <h1 className="w-full text-4xl">No products in cart</h1>
              <h1>Get some products for you!</h1>
              <Link
                to="/"
                className="btn text-center m-auto align-middle bg-[#1a1a1a] rounded-md p-3 w-fit text-neutral-50 text-lg uppercase tracking-widest"
              >
                Buy Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
