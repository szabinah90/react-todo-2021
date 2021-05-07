import { TODOS } from "../constants/todo.constants";
import { ITodo } from "../../models/todo.interface";

export const getTodos = { type: TODOS.GET };
export const resolveTodos = (todos: ITodo[]) => ({
  type: TODOS.RESOLVE,
  payload: todos,
});
