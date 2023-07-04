import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/user";
import modalReducer from "@/store/reducers/modal";

export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer
  }
});