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
      state.Products = products;
      let filteredProducts = state.Products.filter(
        (prod: any) => action.payload === prod.type
      );
      state.Products = filteredProducts;
    },
    filterByHuman: (state, action) => {
      // console.log("human", action);
      // state.filterByHuman = action.payload.map((pay: string) => {
      //   console.log(pay);
      //   return current(state.ProductsList).filter(
      //     (prod: any) => prod.human === +pay
      //   );

      // });
      state.filterByHuman = current(state.ProductsList).filter(
        (prod: any) => prod.category === +action.payload
      );
      state.filterByHuman = state.filterByHuman.flatMap((i) => i);
      // state.filteredProducts = state.filter.flatMap((i) => i);
      state.filter = state.filterByHuman;
      console.log("filteredData", state.filterByHuman);
    },

    filterByBrand: (state, action) => {
      // console.log("brand", action);
      if (state.filterByCategory.length && !state.filterBySize.length) {
        console.log("here1");
        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter(
            (prod: any) => prod.brand === pay
          );
        });
        if (!state.filterByBrand.length) {
          state.filter = state.filterByCategory;
        } else {
          state.filterByBrand = state.filterByBrand.flatMap((i) => i);
          state.filter = state.filterByBrand;
        }
      } else if (state.filterBySize.length && !state.filterByCategory.length) {
        console.log("here2");

        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterBySize).filter(
            (prod: any) => prod.brand === pay
          );
        });
        if (!state.filterByBrand.length) {
          state.filter = state.filterBySize;
        } else {
          state.filter = state.filterByBrand.flatMap((i) => i);
        }
      } else {
        console.log("here3");

        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter(
            (prod: any) => prod.brand === pay
          );
        });
        if (!state.filterByBrand.length) {
          state.filter = state.filterByHuman;
        } else {
          state.filterByBrand = state.filterByBrand.flatMap((i) => i);
          state.filter = state.filterByBrand;
        }
      }

      // console.log("Brand", state.filterByBrand);
    },
    filterByCategory: (state, action) => {
      // console.log("category", action);

      if (!state.filterByBrand.length && !state.filterBySize.length) {
        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay, "here");
          return current(state.filterByHuman).filter(
            (prod: any) => prod.category === pay
          );
        });
        state.filterByCategory = state.filterByCategory.flatMap((i) => i);
        if (!state.filterByCategory.length) {
          state.filter = state.filterByHuman.flatMap((i) => i);
        } else {
          state.filter = state.filterByCategory.flatMap((i) => i);
        }
      } else if (!state.filterByBrand.length && state.filterBySize.length) {
        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterBySize).filter(
            (prod: any) => prod.category === pay
          );
        });
        if (!state.filterByCategory.length) {
          state.filter = state.filterBySize.flatMap((i) => i);
        } else {
          state.filter = state.filterByCategory.flatMap((i) => i);
        }
      } else {
        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByBrand).filter(
            (prod: any) => prod.category === pay
          );
        });
        if (!state.filterByCategory.length) {
          state.filter = state.filterByBrand.flatMap((i) => i);
        } else {
          state.filterByCategory = state.filterByCategory.flatMap((i) => i);
          state.filter = state.filterByCategory;
        }
      }

      // console.log("category", state.filterByCategory);
    },

    filterBySize: (state, action) => {
      // console.log("size", action);
      if (!state.filterByBrand.length && !state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
        if (!state.filterBySize.length) {
          state.filter = state.filterByHuman.flatMap((i) => i);
        } else {
          state.filter = state.filterBySize.flatMap((i) => i);
        }
      } else if (state.filterByBrand.length && !state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByBrand).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
        if (!state.filterBySize.length) {
          state.filter = state.filterByBrand.flatMap((i) => i);
        } else {
          state.filter = state.filterBySize.flatMap((i) => i);
        }
      }
      // this condition can be deleted
      else if (!state.filterByBrand.length && state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });

        if (!state.filterBySize.length) {
          state.filter = state.filterByCategory.flatMap((i) => i);
        } else {
          state.filter = state.filterBySize.flatMap((i) => i);
        }
      } else {
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter((prod: any) =>
            prod.size?.includes(pay)
          );
        });
        if (!state.filterBySize.length) {
          state.filter = state.filterByCategory.flatMap((i) => i);
        } else {
          state.filterBySize = state.filterBySize.flatMap((i) => i);
          state.filter = state.filterBySize;
        }
      }

      // console.log("size", state.filterBySize);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
