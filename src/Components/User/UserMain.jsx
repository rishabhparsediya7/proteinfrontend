import React, { useContext, useEffect, useState } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import FilterProduct from "./FilterProduct";
import ProductComponent from "./ProductComponent";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const UserMain = () => {
  const images = [image1, image2, image1, image2, image1, image2];
  const [inputValue, setInputValue] = useState("");
  const { loggedIn, verified } = useContext(UserContext);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const filters = ["Popular", "BestSeller", "Trending", "Yours Favourite"];
  const [filterState, setFilterState] = useState(filters);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="w-full px-2 md:px-60">
      <div className="w-full py-6">
        <div className="flex flex-col w-full leading-10 gap-2">
          <h1 className="text-5xl font-extrabold">Protein Hut</h1>
          <h3 className="text-3xl font-bold">Believe. Be Stronger.</h3>
        </div>
      </div>
      <div className="w-full px-1">
        <input
          className="w-full rounded-md placeholder:text-slate-900 focus:border-slate-600"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search your feed"
        />
      </div>
      <div className="px-1 md:px-2 py-2 w-full inline-block whitespace-nowrap overflow-x-scroll no-scrollbar">
        {images.map((e, index) => (
          <div className="w-4/5 md:w-1/3 inline-block mr-2" key={index}>
            <img className="w-full md:w-80 rounded-md h-48" src={e} alt="" />
          </div>
        ))}
      </div>
      <FilterProduct
        filterState={filterState}
        setFilterState={setFilterState}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <ProductComponent
        filterName={inputValue}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default UserMain;
