import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductComponent = ({ filterName, selectedFilters }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`
      );
      if (response.status == 200) {
        setProducts(response.data.products);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div className="px-1 w-full">
      <div className="w-full flex flex-wrap">
        {products.map((e, index) => {
          const src = Math.floor((Math.random() * 1000) % 8);
          return <ProductCard key={index} props={{ ...e, src }} />;
        })}
      </div>
    </div>
  );
};

export default ProductComponent;
