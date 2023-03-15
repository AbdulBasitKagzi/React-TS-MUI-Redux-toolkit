import { createSlice } from "@reduxjs/toolkit";

interface userstate {
  User: Object;
  //   id: string;
  //   type: string;
  //   category: string;
  //   image: string | undefined;
  //   name: string;
  //   price: string;
  //   cancelPrice: string;
}

// type user = {
//   email: string;
//   password: string;
// };

// const User: user = {
//   email: "",
//   password: "",
// };
const userState: userstate = {
  User: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login: (state, action) => {
      state.User = action.payload.userCredentials;
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(state.User));
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
