import { configureStore } from "@reduxjs/toolkit";
import { exampleReducer } from "../reducers/firstExample";

export const store = configureStore({reducer: exampleReducer});