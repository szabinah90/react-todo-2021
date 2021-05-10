import { ITodoReducer } from "../reducers/todos.reducer";
import { ITodo } from "../../models/todo.interface";

export const sortedTodos = (state: ITodoReducer): ITodo[] => {
  const items: ITodo[] = [...state.items];
  return items.sort((a, b) => b.id - a.id);
};

const completedTodos = (state: ITodoReducer): ITodo[] => {
  return state.items.filter((todo) => todo.completed);
};

const uncompletedTodos = (state: ITodoReducer): ITodo[] => {
    return state.items.filter((todo) => !todo.completed);
};
