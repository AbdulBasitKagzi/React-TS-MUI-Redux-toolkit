import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { products, gender, brandFilter, categoriesFilter } from '../../data/Constants';
import { productLists } from '../../data/ProductsContant';
import { product, productProps, productstate } from '../product/product.types';

const productState: productstate = {
  Products: products,
  ProductsList: productLists,
  // filteredProducts: [],
  filterByPrice: [],
  filter: [],
  filterByHuman: [],
  filterBySize: [],
  filterByCategory: [],
  filterByBrand: [],
  mainArray: [],
  filteredGender: {},
  filteredCategory: {},
  fitleredBrand: {},
  gender: gender,
  brand: brandFilter,
  category: categoriesFilter,
  selectedProduct: null,
  minValue: 0,
  maxValue: 0
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: productState,
  reducers: {
    filterProducts: (
      state: typeof productState,
      {
        payload
      }: PayloadAction<{
        gender: number;
        brands: Array<number> | null;
        categories: Array<number> | null;
        priceRange: { min: number; max: number };
      }>
    ) => {
      let updatedProducts = [...productLists];
      if (payload?.gender) {
        updatedProducts = updatedProducts.filter(item => item.gender === payload.gender);
      }
      if (payload.priceRange) {
        updatedProducts = updatedProducts?.filter(
          item =>
            item.productCurrentPrice >= payload?.priceRange?.min &&
            item.productCurrentPrice <= payload?.priceRange?.max
        );
      }
      if (payload.brands !== null) {
        updatedProducts = updatedProducts?.filter(item => payload?.brands?.includes(item.brand));
      }
      if (payload.categories !== null) {
        updatedProducts = updatedProducts?.filter(item => payload?.categories?.includes(item.category));
      }
      state.ProductsList = [...updatedProducts];
    },
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
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    addColor: (state, action) => {
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    filterProduct: (state, action) => {
      state.Products = products;
      let filteredProducts = state.Products.filter((prod: product) => action.payload === prod.type);
      state.Products = filteredProducts;
    },

    filterByHuman: (state, action) => {
      state.filteredGender = state.gender.find(
        (gender: { id: number; value: string; slug: string }) => gender.slug === action.payload.id
      );
      // console.log("gender", current(state.filteredGender));
      state.fitleredBrand = state.brand.find(
        (brand: { id: number; value: string; slug: string }) => brand.slug === action.payload.type
      );

      state.filteredCategory = state.category.find(
        (category: { id: number; value: string; slug: string }) => category.slug === action.payload.type
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
          (product: productProps) => product.category === state.filteredCategory.id
        );
        // console.log("prod", state.filterByHuman);
        state.filter = state.filterByHuman;
      }
      state.mainArray = state.filterByHuman;
      console.log('main human', state.mainArray);
    },

    filterByPrice: (state, action) => {
      console.log('price action', action);

      if (state.filterByBrand.length) {
        console.log('price brand');

        state.filterByPrice = state.filterByBrand.filter((prod: productProps) => {
          return (
            prod.productCurrentPrice >= action.payload[0] && prod.productCurrentPrice <= action.payload[1]
          );
        });
        console.log('state', state.filterByPrice);
        state.filter = state.filterByPrice;
      } else if (state.filterByCategory.length) {
        console.log('price category');
        state.filterByPrice = state.filterByCategory.filter((prod: productProps) => {
          return (
            prod.productCurrentPrice >= action.payload[0] && prod.productCurrentPrice <= action.payload[1]
          );
        });
        console.log('state', state.filterByPrice);
        state.filter = state.filterByPrice;
      } else if (state.filterBySize.length) {
        console.log('price size');

        state.filterByPrice = state.filterBySize.filter((prod: productProps) => {
          return (
            prod.productCurrentPrice >= action.payload[0] && prod.productCurrentPrice <= action.payload[1]
          );
        });
        console.log('state', state.filterByPrice);
        state.filter = state.filterByPrice;
      } else {
        state.filterByPrice = state.filterByHuman.filter((prod: productProps) => {
          return (
            prod.productCurrentPrice >= action.payload[0] && prod.productCurrentPrice <= action.payload[1]
          );
        });
        console.log('state', state.filterByPrice);
        state.filter = state.filterByPrice;
      }
    },

    filterByBrand: (state, action) => {
      if (state.filterByCategory.length && !state.filterBySize.length && !state.filterByPrice.length) {
        console.log('brand here1');
        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter((prod: productProps) => prod.brand === pay);
        });
        console.log('state', state.filterByBrand.length);
        if (!state.filterByBrand.length) {
          state.filter = state.filterByCategory;
        } else {
          state.filterByBrand = state.filterByBrand.flatMap(i => i);
          state.filter = state.filterByBrand;
        }
      } else if (state.filterBySize.length && !state.filterByCategory.length && !state.filterByPrice.length) {
        console.log('brand here2');
        if (action.payload.length) {
          state.filterByBrand = action.payload.map((pay: number) => {
            // console.log(pay);
            return current(state.filterBySize).filter((prod: productProps) => prod.brand === pay);
          });
        }

        if (!state.filterByBrand.length) {
          console.log('if');
          state.filter = state.filterBySize.flatMap(i => i);
        } else {
          console.log('else');
          state.filter = state.filterByBrand.flatMap(i => i);
        }
      } else if (!state.filterBySize.length && !state.filterByCategory.length && state.filterByPrice.length) {
        console.log('brand here2.1');
        if (action.payload.length) {
          state.filterByBrand = action.payload.map((pay: number) => {
            // console.log(pay);
            return current(state.filterByPrice).filter((prod: productProps) => prod.brand === pay);
          });
          state.filterByBrand = state.filterByBrand.flatMap(i => i);
          console.log(
            'sfdsfasa',
            state.filterByBrand.flatMap(i => i)
          );
        } else {
          state.filter = state.filterByPrice;
          return;
        }

        if (!state.filterByBrand.length) {
          console.log('if');
          state.filter = state.filterByPrice.flatMap(i => i);
        } else {
          console.log('else');
          state.filter = state.filterByBrand.flatMap(i => i);
        }
      } else {
        console.log('brand here3');
        state.filterByBrand = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter((prod: productProps) => prod.brand === pay);
        });
        if (!state.filterByBrand.length) {
          state.filter = state.filterByHuman.flatMap(i => i);
        } else {
          state.filterByBrand = state.filterByBrand.flatMap(i => i);
          state.filter = state.filterByBrand;
        }
      }
    },

    filterByCategory: (state, action) => {
      // console.log("category", action);

      if (!state.filterByBrand.length && !state.filterBySize.length && !state.filterByPrice.length) {
        console.log('category here 1');
        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay, "here");
          return current(state.filterByHuman).filter((prod: productProps) => prod.category === pay);
        });
        state.filterByCategory = state.filterByCategory.flatMap(i => i);
        if (!action.payload.length) {
          state.filter = state.filterByHuman.flatMap(i => i);
        } else {
          state.filter = state.filterByCategory;
        }
      } else if (!state.filterByBrand.length && !state.filterByPrice.length && state.filterBySize.length) {
        console.log('category here 2');

        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterBySize).filter((prod: productProps) => prod.category === pay);
        });
        if (!state.filterByCategory.length) {
          state.filter = state.filterBySize.flatMap(i => i);
        } else {
          state.filter = state.filterByCategory.flatMap(i => i);
        }
      } else if (!state.filterByBrand.length && !state.filterBySize.length && state.filterByPrice.length) {
        console.log('category here 2.1');

        state.filterByCategory = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByPrice).filter((prod: productProps) => prod.category === pay);
        });
        if (!state.filterByCategory.length) {
          state.filter = state.filterByPrice.flatMap(i => i);
        } else {
          state.filter = state.filterByCategory.flatMap(i => i);
        }
      } else {
        state.filterByCategory = action.payload.map((pay: number) => {
          console.log('category here 3', pay, current(state.filterByBrand));
          return state.filterByBrand.flatMap(i => i).filter((prod: productProps) => prod.category === pay);
        });

        if (!state.filterByCategory.length) {
          state.filter = state.filterByBrand.flatMap(i => i);
        } else {
          state.filterByCategory = state.filterByCategory.flatMap(i => i);
          state.filter = state.filterByCategory;
        }
      }
    },

    filterBySize: (state, action) => {
      // console.log("size", action);
      if (!state.filterByBrand.length && !state.filterByCategory.length && !state.filterByPrice.length) {
        console.log('size here 1');

        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByHuman).filter((prod: productProps) => prod.size?.includes(pay));
        });
        let data = new Set(state.filterBySize.flatMap(i => i));
        state.filterBySize = Array.from(data);

        if (!state.filterBySize.length) {
          state.filter = state.filterByHuman.flatMap(i => i);
        } else {
          state.filter = state.filterBySize.flatMap(i => i);
        }
      } else if (state.filterByBrand.length && state.filterByPrice.length && !state.filterByCategory.length) {
        console.log('size here 2');
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByBrand).filter((prod: productProps) => prod.size?.includes(pay));
        });
        let data = new Set(state.filterBySize.flatMap(i => i));
        state.filterBySize = Array.from(data);

        if (!state.filterBySize.length) {
          state.filter = state.filterByBrand.flatMap(i => i);
        } else {
          state.filter = state.filterBySize.flatMap(i => i);
        }
      } else if (
        state.filterByBrand.length &&
        !state.filterByPrice.length &&
        !state.filterByCategory.length
      ) {
        console.log('size here 2');
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByBrand).filter((prod: productProps) => prod.size?.includes(pay));
        });
        let data = new Set(state.filterBySize.flatMap(i => i));
        state.filterBySize = Array.from(data);

        if (!state.filterBySize.length) {
          state.filter = state.filterByBrand.flatMap(i => i);
        } else {
          state.filter = state.filterBySize.flatMap(i => i);
        }
      } else if (
        !state.filterByBrand.length &&
        !state.filterByCategory.length &&
        state.filterByPrice.length
      ) {
        console.log('size here 3');

        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByPrice).filter((prod: productProps) => prod.size?.includes(pay));
        });
        let data = new Set(state.filterBySize.flatMap(i => i));
        state.filterBySize = Array.from(data);

        if (!state.filterBySize.length) {
          state.filter = state.filterByPrice.flatMap(i => i);
        } else {
          state.filter = state.filterBySize.flatMap(i => i);
        }
      } else {
        console.log('size here 4');
        console.log('sfsfsfdsfdf', current(state.filterByCategory));
        state.filterBySize = action.payload.map((pay: number) => {
          // console.log(pay);
          return current(state.filterByCategory).filter((prod: productProps) => prod.size?.includes(pay));
        });
        let data = new Set(state.filterBySize.flatMap(i => i));
        state.filterBySize = Array.from(data);
        if (!state.filterBySize.length) {
          state.filter = state.filterByCategory.flatMap(i => i);
        } else {
          state.filterBySize = state.filterBySize.flatMap(i => i);
          state.filter = state.filterBySize;
        }
      }

      // console.log("size", state.filterBySize);
    }
  }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
