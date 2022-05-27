import { createAction, nanoid } from "@reduxjs/toolkit";

/**
 * createAction('actionType', function that must return payload)
 * Inside the function you can apply any logic you want
 * To call the action: EXAMPLE()
 */
export const EXAMPLE = createAction('EXAMPLE', (num1, num2) => {
  return {
    payload: {
      num: num1 + num2,
      id: nanoid()
    }
  }
}); 

