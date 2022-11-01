import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const covidGlobalAsyncThunk = createAsyncThunk(
  "covidGlobalAsyncThunk",
  async (data) => {
    let res = await axios(`https://covid19.mathdro.id/api/${data || ""}`).then(
      (data) => data.data
    );
    return res;
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
    isLoading: false,
    dataSelector: "",
  },
  reducers: {
    dataSelectorUpdater: (state, action) => {
      state.dataSelector = action.payload;
    },
  },
  extraReducers: {
    [covidGlobalAsyncThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [covidGlobalAsyncThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [action.payload];
    },
  },
});
export const { dataSelectorUpdater } = covidSlice.actions;
export default covidSlice.reducer;
