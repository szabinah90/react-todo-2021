import { TODOS } from "../constants/todo.constants";
import { ITodo } from "../../models/todo.interface";

export const getTodos = { type: TODOS.GET };

export const resolveTodosAction = (todos: ITodo[]) => ({
  type: TODOS.RESOLVE_TODOS,
  payload: todos,
});

export const resolveTodoAction = (todo: ITodo) => ({
  type: TODOS.RESOLVE_TODO,
  payload: todo,
});

export const addTodoAction = (todo: ITodo) => ({ type: TODOS.CREATE, payload: todo });

export const deleteTodoAction = (id: number) => ({ type: TODOS.DELETE, payload: id });
