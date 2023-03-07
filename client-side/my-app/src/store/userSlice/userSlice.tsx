import { createSlice } from "@reduxjs/toolkit";

type user = {
  email: string;
  password: string;
};

const User: user = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: User,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.userCredentials.email;
      state.password = action.payload.userCredentials.password;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.userCredentials)
      );
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
