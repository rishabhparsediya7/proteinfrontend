import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  category: "",
  price: 0,
  sorting: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addCompany: (state, action) => {
      state.company = action.payload;
    },
    addPrice: (state, action) => {
      state.price = action.payload;
    },
    addSort: (state, action) => {
      state.sorting = action.payload;
    },
  },
});

export const { addCategory, addCompany, addPrice, addSort } =
  filterSlice.actions;

export const selectCategory = (state) => state.filter.category;
export const selectCompany = (state) => state.filter.company;
export const selectPrice = (state) => state.filter.price;
export const selectSorting = (state) => state.filter.sorting;

export default filterSlice.reducer;
