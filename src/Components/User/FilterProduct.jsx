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
  const SORT_BY_LIST = ["Price_High_to_Low", "Price_Low_to_High"];
  const dispatch = useDispatch();
  const clearFilters = () => {
    dispatch(addCategory(""));
    dispatch(addCompany(""));
    setCatState("Category");
    setComState("Company");
  };
  return (
    <div className="w-full flex justify-start gap-x-1 px-2 align-middle overflow-x-scroll no-scrollbar">
      <DropDown list={CATEGORIES} cate={catState} />
      <DropDown list={COMPANY_NAMES} cate={comState} />
      <DropDown list={SORT_BY_LIST} cate={"Sort_By"} />
      <PriceComponent />
      <div>
        <button
          onClick={clearFilters}
          className="border-[0.025rem] border-[#ffffff] w-full rounded-md px-1 py-2"
        >
          Clear_Filters
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
