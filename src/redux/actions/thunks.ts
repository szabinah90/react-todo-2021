import { addTodo, resolveTodo, resolveTodos } from "./todos.action";
import {INewTodo, ITodo} from "../../models/todo.interface";
// a getTodos visszatér egy olyan függvénnyel, aminek a dispatch a paramétere
// (getState is lehet mellette, csak nem használjuk) -- Thunk middleware adja át őket
// dispatch típusát nem tudjuk
export const getTodos = () => async (
  // thunkból jön a dispatch
  dispatch: any,
  getState: any,
  { api }: any
) => {
  try {
    const response = await api.get("/todos");
    dispatch(resolveTodos(response));
  } catch (apiError) {
    console.error(apiError);
  }
};

export const updateTodo = (todo: ITodo) => async (
  dispatch: any,
  getState: any,
  { api }: any
) => {
  try {
    const response = await api.put(`/todos/${todo.id}`, { body: todo });
    dispatch(resolveTodo(response));
  } catch (apiError) {
    console.error(apiError);
  }
};

export const createTodo = (todo: INewTodo) => async (
  dispatch: any,
  getState: any,
  { api }: any
) => {
  try {
    const response = await api.post("/todos", { body: todo });
    dispatch(addTodo(response));
  } catch (apiError) {
    console.error(apiError);
  }
};
