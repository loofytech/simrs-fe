import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "@/store/reducers/patientReducer";

export default configureStore({
  reducer: {
    patientReducer
  }
});