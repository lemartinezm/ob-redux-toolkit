import { createAction } from "@reduxjs/toolkit";

let nextTaskId = 0;

export const ADD_TASK = createAction('ADD_TASK', name => {
  return {
    payload: {
      name,
      id: nextTaskId++
    }
  }
})

export const TOGGLE_TASK = createAction('TOGGLE_TASK', (id) => {
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