import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addCompany, addSort } from "../../../redux/filterSlice";
import { FilterContext } from "../../../context/UserContext";
const DropDown = ({ Classes, list, cate }) => {
  const dispatch = useDispatch();
  const [listHide, setListHide] = useState(false);
  const [categorySelect, setCategorySelect] = useState("");
  const { setCategory, setCompany, setPrice } = useContext(FilterContext);
  const handleToggle = () => {
    setListHide(!listHide);
  };
  const handleClick = (ev) => {
    setCategorySelect(ev);

    if (cate === "Category") {
      dispatch(addCategory(ev));
      setCategory(ev);
    }
    if (cate === "Company") {
      dispatch(addCompany(ev));
      setCompany(ev);
    }
    if (cate === "Sort by") {
      if (ev === "Price High to Low") dispatch(addSort("DESC"));
      else if (ev === "Price Low to High") dispatch(addSort("ASC"));
    }
    if (listHide) setListHide(false);
  };
  return (
    <div className={`max-h-2 ${Classes ? `ml-2` : ``}`}>
      <button
        className="inline-flex items-center px-3 py-2 mb-3 me-3 text-sm font-medium text-center text-white bg-icon border-[0.010rem] border-[#ffffff] rounded-md md:mb-0 focus:outline-none"
        type="button"
        onClick={handleToggle}
      >
        {categorySelect && cate ? categorySelect : cate}
        <i className="bi bi-chevron-down px-2"></i>
      </button>
      <div
        className={`z-10 ${
          listHide ? `` : `hidden`
        } bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul className="py-2 text-sm z-50 text-gray-700 dark:text-gray-200">
          {list &&
            list.map((ev, index) => (
              <li
                key={index}
                onClick={() => handleClick(ev)}
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {ev}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
