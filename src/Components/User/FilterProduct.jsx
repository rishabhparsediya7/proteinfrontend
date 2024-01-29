import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const FilterProduct = ({
  filterState,
  setFilterState,
  selectedFilters,
  setSelectedFilters,
}) => {
  const removeFilter = (e) => {
    const el = e.target.id;
    setSelectedFilters(() => selectedFilters.filter((a) => a != el));
    setFilterState((prev) => [...prev, el]);
  };
  const handleFilters = (e) => {
    const f = e.target.innerHTML;
    setSelectedFilters((prev) => [...prev, f]);
    setFilterState(() => {
      return filterState.filter((a) => {
        return a != f;
      });
    });
  };
  return (
    <div className="px-1 w-full inline-block whitespace-nowrap overflow-x-scroll no-scrollbar">
      {selectedFilters.length > 0 &&
        selectedFilters.map((e, index) => (
          <div className="inline-block mr-2" key={index}>
            <h3 className="rounded-2xl flex text-neutral-50 bg-slate-700 text-lg px-4">
              {e}
              <RxCross1
                id={`${e}`}
                className="my-auto text-xl font-bold cursor-pointer"
                onClick={removeFilter}
              />
            </h3>
          </div>
        ))}
      {filterState.map((e, index) => (
        <div className="inline-block cursor-pointer mr-2" onClick={handleFilters} key={index}>
          <h3 className="rounded-2xl text-neutral-50 bg-yellow-400 text-lg px-4">
            {e}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
