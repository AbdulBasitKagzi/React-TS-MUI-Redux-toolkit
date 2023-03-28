import { createSlice } from "@reduxjs/toolkit";

export interface cartProducts {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: Array<string>;
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<number>;
  color: Array<number>;
  reviewRate: number;
  slug: string;
  quantity: number;
  selectedSize?: number;
  selectedColor?: number;
}

interface cartSliceState {
  cartProducts: cartProducts[];
}

const cartSliceState: cartSliceState = {
  cartProducts: [],
};
// const cartSliceState: cartSliceState = {
//   cartProducts: cartProducts[],
// };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartSliceState,
  reducers: {
    addProductToCart: (state, action) => {
      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
