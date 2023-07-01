import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    auth: false,
    user: null
  },
  reducers: {
    setAuth: (state, param) => {
      state.auth = param.payload;
    },
    setUser: (state, param) => {
      state.user = param.payload;
    }
  }
});

export const { setAuth, setUser } = userSlice.actions;

export default userSlice.reducer;