import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

let store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
