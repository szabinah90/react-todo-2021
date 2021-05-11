import { ITodoReducer } from "../reducers/todos.reducer";
import { ITodo } from "../../models/todo.interface";
import { createSelector } from "reselect";
import { IRootReducer } from "../reducers";

export const sortedTodos = (state: ITodoReducer): ITodo[] => {
  const items: ITodo[] = [...state.items];
  return items.sort((a, b) => b.id - a.id);
};

export const todosCount = (state: IRootReducer): number => filteredTodos(state).length;

export const completedTodos = (state: IRootReducer): ITodo[] => {
  // azért nem create selector, mert a filteredTodos-nak az eredményét használjuk, nem magát a state-et
  const filteredItems = filteredTodos(state);
  return filteredItems
    .filter((todo) => todo.completed)
    .sort((a, b) => b.id - a.id);
};

export const uncompletedTodos = (state: IRootReducer): ITodo[] => {
  const filteredItems = filteredTodos(state);
  return filteredItems
    .filter((todo) => !todo.completed)
    .sort((a, b) => b.id - a.id);
};

// akkor jó a create selector, ha mindegyik a state-tel dolgozik
export const uncompletedTodosCount = createSelector(
  todosCount,
  completedTodos,
  (allCount, uncompleted) => allCount - uncompleted.length
);

export const completedTodosCount = createSelector(
  todosCount,
  uncompletedTodos,
  (allCount, completed) => allCount - completed.length
);

export const filteredTodos = (state: IRootReducer) =>
  state.search.keyword === ""
    ? state.todo.items
    : state.todo.items.filter((todo) =>
        todo.title.toLowerCase().includes(state.search.keyword.toLowerCase())
      );
