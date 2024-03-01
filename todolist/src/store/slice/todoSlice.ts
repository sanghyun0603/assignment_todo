import {
  configureStore,
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";

interface Todos {
  contents: string[];
}

const initialState: Todos = {
  contents: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state: Todos, action: PayloadAction<string>) => {
      state.contents.push(action.payload);
    },
    deleteTodos: (state: Todos, action: PayloadAction<number>) => {
      state.contents.splice(action.payload, 1);
    },
  },
});

export default todoSlice;
export const { addTodos, deleteTodos } = todoSlice.actions;
