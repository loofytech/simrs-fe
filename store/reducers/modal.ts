import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    CREATE_PATIENT: false
  },
  reducers: {
    openCreatePatient: (state, param) => {
      state.CREATE_PATIENT = param.payload;
    }
  }
});

export const {openCreatePatient} = modalSlice.actions;

export default modalSlice.reducer;