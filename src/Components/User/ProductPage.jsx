import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import axios from "axios";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`${BASE_URL}/products/id/${id}`);
      console.log(response);
      if (response.status == 200) {
        console.log("Product Fetched");
        setProduct(response.data.product);
      }
    };
    if (localStorage.getItem("loggedIn")) {
      setError("");
      getProduct();
    } else {
      setTimeout(() => {
        navigate("/signin");
      }, 5000);
      setError(
        "You can't view the page until you're signed in. Redirecting to Signin Page"
      );
    }
  }, []);
  return (
    <div>
      <Navbar />
      {error && (
        <div className="flex flex-col gap-4">
          <p>{error}</p>{" "}
          <Link
            to="signin"
            className="bg-yellow-300 w-fit rounded-md text-neutral-50 p-3"
          >
            Signin
          </Link>{" "}
        </div>
      )}
      {localStorage.getItem("loggedIn") && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductPage;
