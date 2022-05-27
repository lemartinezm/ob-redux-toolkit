import { createAction } from "@reduxjs/toolkit";

let nextTodoId = 0;

export const ADD_TODO = createAction('ADD_TODO', name => {
  return {
    payload: {
      name,
      id: nextTodoId++
    }
  }
})

export const TOGGLE_TODO = createAction('TOGGLE_TODO', (id) => {
  return {
    payload: {
      id
    }
  }
})

export const SET_VISIBILITY_FILTER = createAction('SET_VISIBILITY_FILTER', (filter) => {
  return {
    payload: {
      filter
    }
  }
})