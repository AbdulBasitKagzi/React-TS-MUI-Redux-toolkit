import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

let store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
