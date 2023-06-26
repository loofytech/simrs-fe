import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patientSlice",
  initialState: {
    CREATE_PATIENT: false
  },
  reducers: {
    setCreate: (state, action) => {
      state.CREATE_PATIENT = action.payload;
    }
  }
});

export const {
  setCreate
} = patientSlice.actions;

export default patientSlice.reducer;