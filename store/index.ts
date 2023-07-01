import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/user";

export default configureStore({
  reducer: {
    user: userReducer
  }
});