import { createSlice } from "@reduxjs/toolkit";

const regionalSlice = createSlice({
  name: "regionalSlice",
  initialState: {
    PROVINCE: null,
    REGENCY: null,
    DISTRICT: null,
    SUBDISTRICT: null
  },
  reducers: {
    setProvince: (state, param) => {
      state.PROVINCE = param.payload;
    },
    setRegency: (state, param) => {
      state.REGENCY = param.payload;
    },
    setDistrict: (state, param) => {
      state.DISTRICT = param.payload;
    },
    setSubdistrict: (state, param) => {
      state.SUBDISTRICT = param.payload;
    }
  }
});

export const {
  setProvince,
  setRegency,
  setDistrict,
  setSubdistrict
} = regionalSlice.actions;

export default regionalSlice.reducer;