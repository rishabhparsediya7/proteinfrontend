import React, { useState } from "react";
import { addPrice } from "../../../redux/filterSlice";
import { useDispatch } from "react-redux";
const PriceComponent = () => {
  const [price, setPrice] = useState(50);
  const dispatch = useDispatch();
 
  const performSearch = (price) => {
    dispatch(addPrice(price * 100));
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
    setTimeout(() => {
      performSearch(price);
    }, 500);
  };
  return (
    <div className="flex max-h-10 bg-icon gap-2 px-2 border-[0.010rem] rounded-md py-auto justify-center align-middle">
      <div className="flex-grow my-auto">
        <input
          type="range"
          className="slider h-[.30rem] rounded-md"
          min={1}
          max={100}
          value={price}
          onChange={handleChange}
          id="slider"
        />
      </div>
      <div className="my-auto">
        <p>{price * 100}</p>
      </div>
    </div>
  );
};

export default PriceComponent;
