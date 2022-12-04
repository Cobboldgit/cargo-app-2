import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
        id: 1,
        text: 'this is a text'
    }
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random(),
        text: action.payload,
      };

      state.push(todo);
    },
  },
});


export const {addTodo} = todoSlice.actions

export default todoSlice.reducer