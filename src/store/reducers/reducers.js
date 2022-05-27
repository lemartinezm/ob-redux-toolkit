import { createReducer } from "@reduxjs/toolkit";
import { ADD_TASK, SET_VISIBILITY_FILTER, TOGGLE_TASK } from "../actions/actions";

const initialState = []

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_TASK, (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        completed: false
      })
    })
    .addCase(TOGGLE_TASK, (state, action) => {
      const id = action.payload.id;
      state[id].completed = !state[id].completed;
    })
    .addDefaultCase((state, action) => state)
})

export const filterReducer = createReducer('SHOW_ALL', (builder) => {
  builder
    .addCase(SET_VISIBILITY_FILTER, (state, action) => {
      // Hacer un return si el estado es un tipo primitivo (como un string) para que no de error
      // Con objetos o arrays no es necesario un return
      return action.payload.filter;
    })
    .addDefaultCase((state, action) => state)
})