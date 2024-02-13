import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import overview from "@Modules/overview/store";

const reducer = combineReducers({
  overview,
});
const store = configureStore({
  reducer,
});

export default store;
