import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "./Utils/Loader";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const companyName = useSelector((state) => state.filter.company);
  const categoryName = useSelector((state) => state.filter.category);
  const priceInRs = useSelector((state) => state.filter.price);
  const sorting = useSelector((state) => state.filter.sorting);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`
      );
      if (response.status == 200) {
        setProducts(response.data.products);
      }
      if (companyName) {
        setProducts((products) => {
          return products.filter(
            (product) =>
              product.company.toLowerCase() === companyName.toLowerCase()
          );
        });
      }
      if (categoryName) {
        setProducts((products) => {
          return products.filter(
            (product) =>
              product.category.toLowerCase() === categoryName.toLowerCase()
          );
        });
      }
      if (priceInRs) {
        setProducts((products) => {
          return products.filter((product) => product.price_INR <= priceInRs);
        });
      }
      if (sorting) {
        if (sorting === "DESC") {
          setProducts((products) => {
            return products.sort((a, b) => b.price_INR - a.price_INR);
          });
        } else if (sorting === "ASC") {
          setProducts((products) => {
            return products.sort((a, b) => a.price_INR - b.price_INR);
          });
        }
      }
      setLoading(false);
    };
    getAllProducts();
  }, [categoryName, companyName, priceInRs, sorting]);
  return (
    <div className="relative px-1 w-full flex flex-col">
      {loading && (
        <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <div className={`w-full flex flex-wrap ${loading ? "opacity-30" : ""}`}>
        {products.length > 0 ? (
          products.map((e, index) => {
            return <ProductCard key={index} props={{ ...e }} />;
          })
        ) : (
          <div className="w-full p-10 text-center text-xl uppercase">
            {loading ? "Products Loading..." : "No products matching filter"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
