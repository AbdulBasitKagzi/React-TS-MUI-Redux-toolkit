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
  selectedSize?: number;
  selectedColor?: number;
}

export interface productProps {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string[];
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
}
export interface product {
  id: string;
  type: string;
  category: string;
  image: string;
  productName: string;
  price: string;
  cancelPrice: string;
}
export interface genderProps {
  id: number;
  value: string;
  slug: string;
}
export interface brandProps {
  id: number;
  value: string;
  slug: string;
}
export interface categoryProps {
  id: number;
  value: string;
  slug: string;
}

interface productstate {
  Products: product[];
  ProductsList: productProps[];
  // filteredProducts: Array<Object>;
  filter: productProps[];
  filterByHuman: productProps[];
  filterBySize: productProps[];
  filterByCategory: productProps[];
  filterByBrand: productProps[];
  filteredGender: any;
  filteredCategory: any;
  fitleredBrand: any;
  gender: genderProps[];
  brand: brandProps[];
  category: categoryProps[];
  selectedProduct: SelectedProductProps;
  minValue: number;
  maxValue: number;
}

const productState: productstate = {
  Products: products,
  ProductsList: productLists,
  // filteredProducts: [],
  filter: [],
  filterByHuman: [],
  filterBySize: [],
  filterByCategory: [],
  filterByBrand: [],
  filteredGender: {},
  filteredCategory: {},
  fitleredBrand: {},
  gender: gender,
  brand: brandFilter,
  category: categoriesFilter,
  selectedProduct: {},
  minValue: 0,
  maxValue: 0,
};

// const Product: product = products;
// const productState = {
//   Product = (product = products),
// };

const productSlice = createSlice({
  name: "productSlice",
  initialState: productState,
  reducers: {
    setMinValue: (state, action) => {
      state.minValue = action.payload;
    },
    setMaxValue: (state, action) => {
      state.maxValue = action.payload;
    },
    selectedProduct: (state, action) => {
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    addSize: (state, action) => {
      state.selectedProduct = {
        ...state.selectedProduct,
        selectedSize: action.payload.size,
      };
    },
    addColor: (state, action) => {
      state.selectedProduct = {
        ...state.selectedProduct,
        selectedColor: action.payload.color,
      };
    },
    filterProduct: (state, action) => {
      state.Products = products;
      let filteredProducts = state.Products.filter(
        (prod: product) => action.payload === prod.type
      );
      state.Products = filteredProducts;
    },

    filterByHuman: (state, action) => {
      state.filteredGender = state.gender.find(
        (gender: { id: number; value: string; slug: string }) =>
          gender.slug === action.payload.id
      );
      // console.log("gender", current(state.filteredGender));
      state.fitleredBrand = state.brand.find(
        (brand: { id: number; value: string; slug: string }) =>
          brand.slug === action.payload.type
      );

      state.filteredCategory = state.category.find(
        (category: { id: number; value: string; slug: string }) =>
          category.slug === action.payload.type
      );
      // console.log("category", current(state.filteredCategory));

      state.filterByHuman = current(state.ProductsList).filter(
        (product: productProps) => product.gender === state.filteredGender.id
      );
      // console.log("human", state.filterByHuman);

      if (state.fitleredBrand) {
        // console.log("brandif");
        state.filterByHuman = state.filterByHuman.filter(
          (product: productProps) => product.brand === state.fitleredBrand.id
        );
        // console.log("prod", state.filterByHuman);
        state.filter = state.filterByHuman;
      } else {
        // console.log("brand else");
        state.filterByHuman = state.filterByHuman.filter(
          (product: productProps) =>
            product.category === state.filteredCategory.id
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
      // state.filterByHuman = current([]);

      // console.log("brand", action);
      if (state.filterByCategory.length && !state.filterBySize.length) {
        console.log("brand here1");
        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter(
            (prod: productProps) => prod.brand === pay
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
            (prod: productProps) => prod.brand === pay
          );
        });
        if (!state.filterByBrand.length) {
          console.log("if");
          state.filter = state.filterBySize.flatMap((i) => i);
        } else {
          console.log("else");
          state.filter = state.filterByBrand.flatMap((i) => i);
        }
      } else {
        console.log("here3");

        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter(
            (prod: productProps) => prod.brand === pay
          );
        });
        if (!state.filterByBrand.length) {
          state.filter = state.filterByHuman.flatMap((i) => i);
        } else {
          state.filterByBrand = state.filterByBrand.flatMap((i) => i);
          state.filter = state.filterByBrand;
        }
      }
      // let filteredProduct = [];
      // state.filterByBrand = state.filterByHuman;

      // console.log("brand", action);
      // if (action.payload.length) {
      //   console.log("if here");
      //   filteredProduct = action.payload.map((pay: number) => {
      //     // console.log(pay);

      //     return current(state.filterByHuman).filter(
      //       (prod: productProps) => prod.brand === pay
      //     );
      //   });
      //   state.filter = filteredProduct.flatMap((i: any) => i);
      // } else {
      //   console.log("else");
      //   state.filter = state.filterByBrand.flatMap((i) => i);
      // }

      // console.log("Brand", state.filterByBrand);
    },
    filterByCategory: (state, action) => {
      // console.log("category", action);

      if (!state.filterByBrand.length && !state.filterBySize.length) {
        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay, "here");
          return current(state.filterByHuman).filter(
            (prod: productProps) => prod.category === pay
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
            (prod: productProps) => prod.category === pay
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
            (prod: productProps) => prod.category === pay
          );
        });
        if (!state.filterByCategory.length) {
          state.filter = state.filterByBrand.flatMap((i) => i);
        } else {
          state.filterByCategory = state.filterByCategory.flatMap((i) => i);
          state.filter = state.filterByCategory;
        }
      }

      // if (state.filterByBrand.length) {
      //   state.filterByHuman = state.filterByBrand;
      //   state.filterByCategory = state.filterByHuman;
      // }

      // console.log("category", state.filterByCategory);
    },

    filterBySize: (state, action) => {
      // console.log("size", action);
      if (!state.filterByBrand.length && !state.filterByCategory.length) {
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter((prod: productProps) =>
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
          return current(state.filterByBrand).filter((prod: productProps) =>
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
          return current(state.filterByCategory).filter((prod: productProps) =>
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
          return current(state.filterByCategory).filter((prod: productProps) =>
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
