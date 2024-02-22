import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import FilterReducer from "./filterSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: FilterReducer,
  },
});
