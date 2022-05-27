import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, todoReducer } from "../reducers/reducers";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer
  }
})