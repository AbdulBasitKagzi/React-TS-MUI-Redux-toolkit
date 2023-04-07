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
        sizes: Array<number> | null;
        priceRange: Array<number>;
      }>
    ) => {
      let updatedProducts = [...productLists];

      if (payload?.gender) {
        updatedProducts = updatedProducts.filter(item => item.gender === payload.gender);
      }
      if (payload?.priceRange !== null && payload?.priceRange?.length !== 0) {
        console.log(payload?.priceRange[0], payload?.priceRange[1]);
        updatedProducts = updatedProducts?.filter(
          item =>
            item.productCurrentPrice >= payload?.priceRange[0] &&
            item.productCurrentPrice <= payload?.priceRange[1]
        );
      }
      if (payload.brands !== null && payload.brands.length !== 0) {
        updatedProducts = updatedProducts?.filter(item => payload?.brands?.includes(item.brand));
      }
      if (payload.categories !== null && payload.categories.length) {
        updatedProducts = updatedProducts?.filter(item => payload?.categories?.includes(item.category));
      }
      if (payload.sizes !== null && payload.sizes.length !== 0) {
        payload.sizes.map(size => {
          updatedProducts.filter(item => {
            if (item.size.includes(size)) updatedProducts.push(item);
          });
        });

        // removing duplicate data with the help of set
        let data = new Set(updatedProducts.flatMap(i => i));
        updatedProducts = Array.from(data);

        state.filter = updatedProducts;
      }
      state.filter = [...updatedProducts];
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
    }
  }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
