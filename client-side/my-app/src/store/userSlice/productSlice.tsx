import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/Constants";

interface productstate {
  Products: Array<Object>;
  //   id: string;
  //   type: string;
  //   category: string;
  //   image: string | undefined;
  //   name: string;
  //   price: string;
  //   cancelPrice: string;
}

const productState: productstate = {
  Products: products,
};

// const Product: product = products;
// const productState = {
//   Product = (product = products),
// };

const productSlice = createSlice({
  name: "productSlice",
  initialState: productState,
  reducers: {
    filterProduct: (state, action) => {
      console.log("action", action);
      state.Products = products;
      let filteredProducts = state.Products.filter(
        (prod: any) => action.payload === prod.type
      );
      console.log("filtered", filteredProducts);
      state.Products = filteredProducts;
      console.log("data", state.Products);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
