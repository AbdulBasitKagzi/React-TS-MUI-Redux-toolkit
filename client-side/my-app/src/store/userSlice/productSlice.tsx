import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../../assets/Constants";
import { productLists } from "../../assets/ProductsContant";
import { gender } from "../../assets/Constants";
import { brandFilter } from "../../assets/Constants";
import { categoriesFilter } from "../../assets/Constants";

interface SelectedProductProps {
  id?: number;
  productName?: string;
  productImages?: { id: number; productImage: string | undefined }[];
  productDescription?: string;
  productOriginalPrice?: number;
  productCurrentPrice?: number;
  gender?: number;
  human?: number;
  category?: number;
  brand?: number;
  size?: Array<Number>;
  color?: Array<Number>;
  reviewRate?: number;
  slug?: string;
}

interface productstate {
  Products: Array<Object>;
  ProductsList: Array<Object>;
  filteredProducts: Array<Object>;
  filter: Array<Object>;
  filterByHuman: Array<Object>;
  filterBySize: Array<Object>;
  filterByCategory: Array<Object>;
  filterByBrand: Array<Object>;
  filteredGender: any;
  filteredCategory: any;
  fitleredBrand: any;
  gender: Array<Object>;
  brand: Array<Object>;
  category: Array<object>;
  selectedProduct: SelectedProductProps;
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
  gender: gender,
  filteredGender: {},
  filteredCategory: {},
  fitleredBrand: {},
  brand: brandFilter,
  category: categoriesFilter,
  selectedProduct: {},
};

// const Product: product = products;
// const productState = {
//   Product = (product = products),
// };

const productSlice = createSlice({
  name: "productSlice",
  initialState: productState,
  reducers: {
    selectedProduct: (state, action) => {
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    filterProduct: (state, action) => {
      state.Products = products;
      let filteredProducts = state.Products.filter(
        (prod: any) => action.payload === prod.type
      );
      state.Products = filteredProducts;
    },

    filterByHuman: (state, action) => {
      state.filteredGender = state.gender.find(
        (gender: any) => gender.slug === action.payload.id
      );
      state.fitleredBrand = state.brand.find(
        (brand: any) => brand.slug === action.payload.type
      );
      state.filteredCategory = state.category.find(
        (category: any) => category.slug === action.payload.type
      );

      state.filterByHuman = current(state.ProductsList).filter(
        (product: any) => product.gender === state.filteredGender.id
      );
      // console.log("gender", state.filterByHuman);

      if (state.fitleredBrand) {
        // console.log("brandif");
        state.filterByHuman = state.filterByHuman.filter(
          (product: any) => product.brand === state.fitleredBrand.id
        );
        // console.log("prod", state.filterByHuman);
        state.filter = state.filterByHuman;
      } else {
        // console.log("brand else");
        state.filterByHuman = state.filterByHuman.filter(
          (product: any) => product.category === state.filteredCategory.id
        );
        // console.log("prod", state.filterByHuman);
        state.filter = state.filterByHuman;
      }

      // need to uncomment below code
      // state.filterByHuman = current(state.ProductsList).filter(
      //   (prod: any) => prod.category === +action.payload
      // );
      // state.filterByHuman = state.filterByHuman.flatMap((i) => i);
      // // state.filteredProducts = state.filter.flatMap((i) => i);
      // state.filter = state.filterByHuman;
      // console.log("filteredData", state.filterByHuman);
    },

    filterByBrand: (state, action) => {
      // console.log("brand", action);
      if (state.filterByCategory.length && !state.filterBySize.length) {
        // console.log("brand here1");
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
        // console.log("here2");

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
        // console.log("here3");

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
