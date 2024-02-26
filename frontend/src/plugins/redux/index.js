import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experiences from "@Modules/experiences/store";
import projects from "@Modules/projects/store";
import repositories from "@Modules/repositories/store";

const reducer = combineReducers({
  experiences,
  projects,
  repositories,
});
const store = configureStore({
  reducer,
});

export default store;
