import { ADD_TODO, CLEAR_TODO, TOGGLE_TODO, DELETE_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const clearTodo = () => {
  return { type: CLEAR_TODO };
};

export const toggle_todo = (payload) => {
  return { type: TOGGLE_TODO, payload: payload };
};

export const delete_todo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};