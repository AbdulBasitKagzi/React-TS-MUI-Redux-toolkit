import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../../assets/Constants";
import { productLists } from "../../assets/ProductsContant";

interface productstate {
  Products: Array<Object>;
  ProductsList: Array<Object>;
  filteredProducts: Array<Object>;
  filter: Array<Object>;
  filterByHuman: Array<Object>;
  filterBySize: Array<Object>;
  filterByCategory: Array<Object>;
  filterByBrand: Array<Object>;
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
  ProductsList: productLists,
  filteredProducts: [],
  filter: [],
  filterByHuman: [],
  filterBySize: [],
  filterByCategory: [],
  filterByBrand: [],
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

    filterByHuman: (state, action) => {
      console.log("human", action);
      state.filterByHuman = action.payload.map((pay: number) => {
        console.log(pay);
        return current(state.ProductsList).filter(
          (prod: any) => prod.human === pay
        );
      });
      state.filterByHuman = state.filterByHuman.flatMap((i) => i);
      // state.filteredProducts = state.filter.flatMap((i) => i);
      console.log("filteredData", state.filterByHuman);
    },

    filterByBrand: (state, action) => {
      console.log("brand", action);
      if (state.filterByCategory.length && !state.filterBySize.length) {
        state.filterByBrand = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByCategory).filter(
            (prod: any) => prod.brand === pay
          );
        });
      } else if (state.filterBySize.length && !state.filterByCategory.length) {
        state.filterByBrand = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterBySize).filter(
            (prod: any) => prod.brand === pay
          );
        });
      } else {
        state.filterByBrand = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByHuman).filter(
            (prod: any) => prod.brand === pay
          );
        });
      }

      state.filterByBrand = state.filterByBrand.flatMap((i) => i);
      console.log("Brand", state.filterByBrand);
    },
    filterByCategory: (state, action) => {
      console.log("category", action);

      if (!state.filterByBrand.length && !state.filterBySize.length) {
        state.filterByCategory = action.payload.map((pay: number) => {
          console.log(pay, "here");
          return current(state.filterByHuman).filter(
            (prod: any) => prod.category === pay
          );
        });
      } else if (!state.filterByBrand.length && state.filterBySize.length) {
        state.filterByCategory = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterBySize).filter(
            (prod: any) => prod.category === pay
          );
        });
      } else {
        state.filterByCategory = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByBrand).filter(
            (prod: any) => prod.category === pay
          );
        });
      }

      state.filterByCategory = state.filterByCategory.flatMap((i) => i);
      console.log("category", state.filterByCategory);
    },

    filterBySize: (state, action) => {
      console.log("size", action);
      if (!state.filterByBrand.length && !state.filterBySize.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByHuman).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
      } else if (state.filterByBrand.length && !state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByBrand).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
      }
      // this condition can be deleted
      else if (!state.filterByBrand.length && state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByCategory).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
      } else {
        state.filterBySize = action.payload.map((pay: number) => {
          console.log(pay);
          return current(state.filterByCategory).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
      }

      state.filterBySize = state.filterBySize.flatMap((i) => i);
      console.log("size", state.filterBySize);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
