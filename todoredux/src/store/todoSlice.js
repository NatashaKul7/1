import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        task: action.payload,
        completed: false,
        isEditing: false,
      });
    },
    toggleCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTask(state, action) {
      const { task, id } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.task = task;
        todoToEdit.isEditing = false;
      }
    },
    toggleEditing(state, action) {
      const todoToEdit = state.todos.find((todo) => todo.id === action.payload);
      if (todoToEdit) {
        todoToEdit.isEditing = !todoToEdit.isEditing;
      }
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo, editTask, toggleEditing } =
  todoSlice.actions;
export default todoSlice.reducer;
