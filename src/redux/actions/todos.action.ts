import { TODOS } from "../constants/todo.constants";
import { ITodo } from "../../models/todo.interface";

export const getTodos = { type: TODOS.GET };

export const resolveTodos = (todos: ITodo[]) => ({
  type: TODOS.RESOLVE_TODOS,
  payload: todos,
});

export const resolveTodo = (todo: ITodo) => ({
  type: TODOS.RESOLVE_TODO,
  payload: todo,
});

export const addTodo = (todo: ITodo) => ({ type: TODOS.CREATE, payload: todo });
