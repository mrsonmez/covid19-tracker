import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./../slice/covidSlice";

const store = configureStore({
  reducer: covidReducer,
});
export default store;
