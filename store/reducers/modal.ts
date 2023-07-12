import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    CREATE_PATIENT: false,
    AFTER_SUBMIT_REGISTRATION: false
  },
  reducers: {
    openCreatePatient: (state, param) => {
      state.CREATE_PATIENT = param.payload;
    },
    openCompleteRegistration: (state, param) => {
      state.AFTER_SUBMIT_REGISTRATION = param.payload;
    }
  }
});

export const {
  openCreatePatient,
  openCompleteRegistration
} = modalSlice.actions;

export default modalSlice.reducer;