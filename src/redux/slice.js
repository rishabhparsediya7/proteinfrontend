import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  wishlist: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cartList.findIndex(
        (p) => p._id === action.payload._id
      );
      if (exists === -1) {
        action.payload.quantity = 1;
        state.cartList.push(action.payload);
      } else {
        let q = state.cartList[exists].quantity;
        state.cartList[exists].quantity = q + 1;
      }
    },
    removeFromCart: (state, action) => {
      const exists = state.cartList.findIndex(
        (p) => p._id === action.payload._id
      );
      if (exists !== -1) {
        let q = state.cartList[exists].quantity;
        if (q === 1) {
          const id = action.payload._id;
          const removedCart = state.cartList.filter((c) => c._id !== id);
          state.cartList = [...removedCart];
        } else state.cartList[exists].quantity = q - 1;
      }
    },
    emptyCart: (state, action) => {
      state.cartList = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCartCount = (state) => state.cart.cartList.length;
export default cartSlice.reducer;
