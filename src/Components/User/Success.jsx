import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/slice";
const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const paymentId = queryParams.get("paymentId");
  const dispatch = useDispatch();
  if (orderId && paymentId) {
    dispatch(emptyCart());
  }
  return <Order />;
};

export default Success;
