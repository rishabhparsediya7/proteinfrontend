import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./Utils/DropDown";
import categories from "../../Constants/constant";
import { addCategory, addCompany, addPrice } from "../../redux/filterSlice";
import PriceComponent from "./Utils/PriceComponent";
import { useDispatch } from "react-redux";
const FilterProduct = () => {
  const [catState, setCatState] = useState("Category");
  const [comState, setComState] = useState("Company");
  const CATEGORIES = [...Object.keys(categories)];
  const COMPANY_NAMES = [
    "Optimum Nutrition (ON)",
    "MuscleBlaze",
    "Ultimate Nutrition",
    "Dymatize",
    "BSN",
    "Labrada",
    "MyProtein",
    "MuscleTech",
    "Scivation",
    "Isopure",
    "Big Muscles Nutrition",
    "Protein World",
    "Incredio",
    "ABB (American Body Building)",
    "RSP Nutrition",
  ];
  const SORT_BY_LIST = ["Price High to Low", "Price Low to High"];
  const dispatch = useDispatch();
  const clearFilters = () => {
    dispatch(addCategory(""));
    dispatch(addCompany(""));
    setCatState("Category");
    setComState("Company");
  };
  return (
    <div className="px-3 w-full flex justify-start align-middle my-auto overflow-x-scroll no-scrollbar">
      <DropDown list={CATEGORIES} cate={catState} />
      <DropDown list={COMPANY_NAMES} cate={comState} />
      <PriceComponent />
      <div className="ml-3">
        <button
          onClick={clearFilters}
          className="border-[0.025rem] max-h-10 border-[#ffffff] rounded-md p-2"
        >
          Clear Filters
        </button>
      </div>
      <DropDown Classes={"2"} list={SORT_BY_LIST} cate={"Sort by"} />
    </div>
  );
};

export default FilterProduct;
