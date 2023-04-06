import { createSlice } from "@reduxjs/toolkit";
import { cartProducts, cartSliceState } from "./cart.types";

const cartStates: cartSliceState = {
  cartProducts: [],
  added: false,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartStates,
  reducers: {
    addProductToCart: (state, action) => {
      console.log("action", action);
      const data = state.cartProducts.find(
        (product: cartProducts) =>
          product.id === action.payload.id &&
          product.selectedSize === action.payload.selectedSize &&
          product.selectedColor === action.payload.selectedColor
      );

      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
      state.added = true;
    },
    increment: (state, action) => {
      console.log(action);
      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
      }
    },
    decrement: (state, action) => {
      let index: number = 0;

      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity--;
      }
      if (state.cartProducts[index].quantity === 0) {
        state.cartProducts = state.cartProducts.filter(
          (product: cartProducts) => product.id !== action.payload.id
        );
      }
    },
    removeProduct: (state, action) => {
      console.log(action);
      state.cartProducts = state.cartProducts.filter(
        (product: cartProducts) => product.id !== action.payload.id
      );
    },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
    notification: (state) => {
      state.added = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
