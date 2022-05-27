import { createReducer } from "@reduxjs/toolkit";
import { EXAMPLE } from "../actions/firstExample";

const initialState = {
  num: 0
};

export const exampleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(EXAMPLE, (state, action) => {state.num += action.payload.num})
    .addDefaultCase((state, action) => {console.log('Executing default case')});
})