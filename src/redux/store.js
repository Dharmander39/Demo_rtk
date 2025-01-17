import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./method/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
