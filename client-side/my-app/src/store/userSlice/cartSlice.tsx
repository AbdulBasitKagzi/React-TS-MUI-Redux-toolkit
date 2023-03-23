import { createSlice, current } from "@reduxjs/toolkit";

interface cartProducts {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string;
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<Number>;
  color: Array<Number>;
  reviewRate: number;
  slug: string;
  quantity: number;
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
      console.log("cart", action);
      const product = action.payload;
      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
        console.log("stack", current(state.cartProducts));
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
        console.log("from else cart", current(state.cartProducts));
      }
    },
    increment: (state, action) => {
      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
        console.log("incrementstack", current(state.cartProducts));
      }
    },
    decrement: (state, action) => {
      const data = state.cartProducts.find(
        (product: cartProducts) => product.id === action.payload.id
      );
      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity--;
        console.log("incrementstack", current(state.cartProducts));
      }
    },
    removeProduct: (state, action) => {
      state.cartProducts.filter(
        (product: cartProducts) => product.id === action.payload.id
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
