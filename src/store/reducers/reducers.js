import { createReducer } from "@reduxjs/toolkit";
import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

const initialState = []

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_TODO, (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        completed: false
      })
    })
    .addCase(TOGGLE_TODO, (state, action) => {
      state[action.payload.id].completed = !state[action.payload.id].completed;
    })
})