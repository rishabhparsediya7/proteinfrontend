import React, { useContext, useEffect, useState } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import FilterProduct from "./FilterProduct";
import ProductComponent from "./ProductComponent";
import bgimage from "../../assets/bgsearchbar.jpeg";
import inputicon from "../../assets/iconvector.png";
import Footer from "./Footer";
const UserMain = () => {
  const images = [image1, image2, image1, image2, image1, image2];
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const filters = ["Popular", "BestSeller", "Trending", "Yours Favourite"];
  const [filterState, setFilterState] = useState(filters);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div>
      <div className="w-full px-2 sm:px-28 md:px-40">
        <div className="relative w-full">
          <img
            className="absolute -z-10 h-[11.75rem] rounded-t-lg rounded-b-3xl w-full"
            src={bgimage}
            alt=""
          />
        </div>
        <div className="w-full px-4 py-6">
          <div className="flex flex-col w-full leading-10 gap-2">
            <h1 className="text-5xl text-white font-extrabold">Protein Hut</h1>
            <h3 className="text-3xl text-white font-bold">
              Believe. Be Stronger.
            </h3>
          </div>
        </div>
        <div className="w-full relative px-1">
          <img
            className="absolute h-9 top-1 left-3 w-9 rounded-full"
            src={inputicon}
            alt=""
          />
          <input
            className="w-full py-2 bg-white text-black rounded-3xl pl-11 placeholder:text-black focus:border-[1px] focus:border-[#747bff]"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search your feed"
          />
        </div>
        <div className="px-1 mt-2 md:px-2 py-2 w-full inline-block rounded-md whitespace-nowrap overflow-x-scroll no-scrollbar">
          {images.map((e, index) => (
            <div className="inline-flex mr-2" key={index}>
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
      <Footer />
    </div>
  );
};

export default UserMain;
